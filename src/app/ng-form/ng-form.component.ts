import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from "@angular/animations";
import {Car, Message, SelectItem} from "../common/car";
import {beforeUrl, pageAnimation} from "../common/public-data";
@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.css'],
  animations: [
    pageAnimation
  ]
})
export class NgFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msgs: Message[] = [];                                  //消息
  userNameModel:string
  doLogin(){

  }
}
