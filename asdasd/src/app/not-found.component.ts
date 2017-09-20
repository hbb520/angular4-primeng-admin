
import { Component } from '@angular/core';
import {Location}               from "@angular/common";
@Component({
  template: `
    <img class="PageNotFoundComponent" (click)="goBack()"
         src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495785843780&di=44c6ca1843d5560e96e93a347a381e78&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F84%2F37%2F71bOOOPIC09_1024.jpg" alt="页面没找到">
  `,
  styles: [ ' .PageNotFoundComponent  { height: 800px  }' ],
})
export class PageNotFoundComponent {
  constructor(private location: Location) {
  };
  goBack(){
    this.location.back();
  }
}
