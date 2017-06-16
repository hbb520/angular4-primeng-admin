import { Component, OnInit } from '@angular/core';
import {beforeUrl, left25Animation, pageAnimation, right25Animation, rotateY90Animation,} from "../common/public-data";
import {Message} from '../common/car';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  animations: [
    pageAnimation,
    rotateY90Animation,
    right25Animation,
    left25Animation
  ]
})
export class ChartsComponent implements OnInit {
  /************************* 当组件渲染后再调用动画 ********************************/
  tag_state: string = "start";                           //表格标签动画初始
  page_state:string =  "start";                          //page动画
  button1_state:string = 'start'                         //添加按钮
  button2_state:string = 'start'                         //批量删除按钮动画
  ngAfterViewInit(){
    this.page_state = "end";
    this.button1_state = 'end'
    this.button2_state = 'end'
  }
  constructor() { }

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }
  msgs: Message[] = [];                                  //消息
  data: any;
}
