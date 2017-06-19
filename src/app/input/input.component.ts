import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Car, Message, SelectItem} from '../common/car';
import {beforeUrl,pageAnimation,China} from "../common/public-data";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  animations: [
    pageAnimation
  ]
})
export class InputComponent implements OnInit {



  constructor() {
  }

  ngOnInit() {
    this.China = China;
  }

  China: any;
  msgs: Message[] = [];                                  //消息
}
