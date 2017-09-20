import {Component, EventEmitter, OnInit} from '@angular/core';
import {UploadOutput, UploadInput, UploadFile, humanizeBytes} from 'ngx-uploader';
import {Message} from '../common/car';
interface FormData {
  concurrency: number;
  autoUpload: boolean;
  verbose: boolean;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() {
    this.formData = {
      concurrency: 0,
      autoUpload: false,
      verbose: true
    };

    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
  }
  msgs: Message[] = [];                                  //消息
  dialog: boolean = false;
  uploadNgIf: boolean = false;
  spanSuccee: boolean = false;          //上传
  spanError: boolean = false;
  uploading: boolean = true;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  fileCount: number = 0;
  fileNumber: number = 0;
  fileArray: any[] = [];

  uploadShow() {
    window.setTimeout(() => {
      this.dialog = true;
    }, 1);
    this.uploadNgIf = true;
    this.fileCount = 0;
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'done') {
      this.fileCount = this.fileCount + 1;
      if (output.file.responseStatus != 201) {
        this.msg(4, '上传失败,服务器错误');
        window.setTimeout(() => {
          this.dialog = false;
        }, 200);
      } else {
        console.log(output.file);
        //上传成功时候的 回调    你可以储存自己想要的东西
        // this.fileArray.push({
        //   originImg: output.file.response.originImg,
        //   thumbnail: output.file.response.thumbnail,
        //   name: output.file.name
        // });
        if (this.fileCount === this.fileNumber) {
          window.setTimeout(() => {
            this.dialog = false;
            this.msg(1, '上传成功');
          }, 200);
        }
      }
    }
    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      this.files.push(output.file);
      this.fileNumber = this.files.length;
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  startUpload(): void {
    let userToken = sessionStorage.getItem('userToken');
    const event: UploadInput = {
      type: 'uploadAll',
      url: "https://jsonplaceholder.typicode.com/posts/",
      method: 'post',
      data: {foo: 'bar'},
      concurrency: 0
    };
    this.uploadInput.emit(event);
  }

  removeFile(id: string): void {
    this.uploadInput.emit({type: 'remove', id: id});
  }

  removeFileArray(index: number) {
    this.fileArray.splice(index, 1);
  }

  /*无图片显示*/
  errorImg(event) {
    event.srcElement.src = './assets/images/shop/img-no.png';
  }

  /*关闭dialog回调*/
  dialogHide(e) {
    this.uploadNgIf = false;
    this.files = [];
  }
  /************************* 信息返回函数 ********************************/
  timeout: any;                                          //错误信息 msg 时间超时

  msg(num, msg) {
    let type = 'info';
    if (num == 1) {
      type = 'success';
    } else if (num == 2) {
      type = 'info';
    } else if (num == 3) {
      type = 'warn';
    } else if (num == 4) {
      type = 'error';
    }
    this.msgs.push({severity: type, detail: msg});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
}
