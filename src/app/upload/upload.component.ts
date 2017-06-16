import { Component, OnInit } from '@angular/core';
import {Message} from '../common/car';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }
  msgs: Message[] = [];

}
