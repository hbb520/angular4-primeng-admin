import {NgModule, Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'my-carousel',
  template: `
    <div class="my-carousel">
      <div class="my-carousel-box">
        <ul class="my-carousel-ul" [style.left.px]="ulLeft">
          <li *ngFor="let item of data">
            <img src={{item.url}} alt="">
          </li>
        </ul>
      </div>
      {{data | json}}
    </div>
  `,
  styles: [`
    .my-carousel .my-carousel-box {
      width: 500px;
      height: 300px;
      position: relative;
      overflow: hidden;
    }
    
    .my-carousel-ul {
      display: block;
      position: absolute;
      top: 0;
      height: 300px;
      width: 2000px;
    }
    
    .my-carousel-box ul li {
      float: left;
    }
    
    .my-carousel-box li img {
      width: 500px;
      height: 300px;
    }
  `]
})
export class MyCarousel {
  constructor() {
    this.adTimer = window.setInterval(() => {
      this.num++;
      if (this.num <= 4) {
        this.ulLeft = -this.num * 500+500;
      } else {
        this.num = 1;
        this.ulLeft = 0;
      }
    }, 2000);
  };
  
  @Input() data: any[];
  adTimer: any;
  num: number = 1;
  ulLeft: number = 0;
  
  
}

@NgModule({
  imports: [CommonModule],
  exports: [MyCarousel],
  declarations: [MyCarousel]
})

export class MyCarouselModule {
}
