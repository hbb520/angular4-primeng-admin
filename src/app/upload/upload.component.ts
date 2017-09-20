import {Component, EventEmitter, OnInit} from '@angular/core';
import {UploadOutput, UploadInput, UploadFile, humanizeBytes} from 'ngx-uploader';
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
  

  spanSuccee: boolean = false;
  spanError: boolean = false;
  uploading: boolean = true;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'done') {
      if (!this.files[0].response) {
        this.spanSuccee = false;
        this.spanError = true;
      } else {
        this.spanSuccee = true;
        this.spanError = false;

        //
        // if (this.files) {
        //   for (let i = 0; i <= this.files.length; i++) {
        //     this.removeFile(this.files[i].id);
        //   }
        // }

      }
    }
    if (output.type === 'allAddedToQueue') {

    } else if (output.type === 'addedToQueue') {
      this.spanSuccee = false;
      this.spanError = false;
      this.files.push(output.file);
    } else if (output.type === 'uploading') {
      const index = this.files.findIndex(file => file.id === output.file.id);
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
      url: 'http://ngx-uploader.com/upload',
      method: 'POST',
      data: {foo: 'bar'},
      concurrency: 0,
      headers: {'Authorization': userToken}
    };
    this.uploadInput.emit(event);
  }


  removeFile(id: string): void {
    this.uploadInput.emit({type: 'remove', id: id});
  }
}
