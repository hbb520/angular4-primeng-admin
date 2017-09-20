import {NgModule, Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'my-loading',
  template: `
    <div class="my-loading-box" *ngIf="getLoading()">
      <div class="my-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular">
          <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
        <br>
        <span class="loading-text">{{text}}</span>
      </div>
    </div>
  `,
  styles: [`
    .my-loading-box {
      position: absolute;
      z-index: 10000;
      background-color: hsla(0, 0%, 100%, .9);
      margin: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: opacity .3s;
    }
    
    .my-loading-spinner {
      top: 0;
      width: 100%;
      margin-top: 30px;
      text-align: center;
      position: absolute;
    }
    
    .my-loading-spinner .circular {
      width: 42px;
      height: 42px;
      animation: loading-rotate 2s linear infinite;
    }
    
    .loading-text {
      display: inline-block;
      color: #20a0ff;
      margin-top: 8px;
    }
    
    svg:not(:root) {
      overflow: hidden;
    }
    
    svg {
      transform-origin: 50% 50% 0px;
    }
    
    .my-loading-spinner .path {
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: #20a0ff;
      stroke-linecap: round;
    }
    
    @keyframes loading-rotate {
      to {
        transform: rotate(1turn)
      }
    }
    
    @keyframes loading-dash {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40px
      }
      to {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120px
      }
    }
  `]
})
export class MyLoading {
  @Input() text: string = '';
  @Input() loading: boolean = false;
  
  getLoading() {
    return this.loading;
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [MyLoading],
  declarations: [MyLoading]
})

export class MyLoadingModule {
}
