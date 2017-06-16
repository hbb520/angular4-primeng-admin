import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {Car, Message, SelectItem} from '../common/car';
import {
  beforeUrl, left25Animation, pageAnimation, right25Animation, rotateY90Animation, China
} from '../common/public-data';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  animations: [
    pageAnimation,
    rotateY90Animation,
    right25Animation,
    left25Animation
  ]
})
export class InputComponent implements OnInit {

  /************************* 当组件渲染后再调用动画 ********************************/
  tag_state: string = 'start';                           //表格标签动画初始
  page_state: string = 'start';                          //page动画
  button1_state: string = 'start';                         //添加按钮
  button2_state: string = 'start';                         //批量删除按钮动画
  ngAfterViewInit() {
    this.page_state = 'end';
    this.button1_state = 'end';
    this.button2_state = 'end';
  }

  constructor() {
  }

  ngOnInit() {
    this.China = China;
  }

  China: any;
  msgs: Message[] = [];                                  //消息
}
