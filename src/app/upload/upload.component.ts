import {Component, EventEmitter, OnInit} from '@angular/core';
import {UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus} from 'ngx-uploader';
import {ToastrService} from 'ngx-toastr';
import {beforeUrl, imgReadUrl} from '../common/public-data';

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

  constructor(private toastr: ToastrService) {
    this.options = {concurrency: 1, allowedContentTypes: ['image/png', 'image/jpeg', 'image/gif']};
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
  }

  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  options: UploaderOptions;
  imgboxNgif: boolean = false;
  progressboxNgif: boolean = true;
  imgReadUrl: string = imgReadUrl;
  thumbnailUrl: string;
  originImgUrl: string;
  response: any;

  /**
   * 上传
   *
   */
  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'done') {
      // this.thumbnailUrl = output.file.response.thumbnail;
      // this.originImgUrl = output.file.response.originImg;
      this.progressboxNgif = false;
      this.imgboxNgif = true;
      console.log(output.file.response);
      this.response = output.file.response;
      this.toastr.success('上传挺简单的吧');
    }
    if (output.type === 'allAddedToQueue') {
      const event: UploadInput = {
        type: 'uploadAll',
        url: 'http://ngx-uploader.com/upload',
        method: 'POST',
        data: {foo: 'bar'}
      };

      this.uploadInput.emit(event);
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      this.progressboxNgif = true;
      this.imgboxNgif = false;
      this.files.push(output.file);
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
    } else if (output.type === 'rejected' && typeof output.file !== 'undefined') {
      console.log(output.file.name + ' rejected');
    }

    this.files = this.files.filter(file => file.progress.status !== UploadStatus.Done);
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'http://ngx-uploader.com/upload',
      method: 'POST',
      data: {foo: 'bar'}
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({type: 'cancel', id: id});
  }

  removeFile(id: string): void {
    this.uploadInput.emit({type: 'remove', id: id});
  }

  removeAllFiles(): void {
    this.uploadInput.emit({type: 'removeAll'});
  }
}
