import {NgModule, Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'my-tag',
  template: `
    <span class="my-tag-box" ngClass="{{type}}">
      {{text}}
      <i class="fa  fa-close" *ngIf="getremove()"></i>
    </span>
  `,
  styles: [`
    .my-tag-box {
      background-color: #8391a5;
      display: inline-block;
      padding: 0 5px;
      height: 24px;
      line-height: 22px;
      font-size: 12px;
      color: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      border: 1px solid transparent;
      white-space: nowrap;
      font-weight: normal;
    }
    .my-tag-box i{
      margin: 0 2px 0 5px;
    }
    
    .gray {
      background-color: #e4e8f1;
      border-color: #e4e8f1;
      color: #48576a;
    }
    
    .primary {
      background-color: rgba(32, 160, 255, .1);
      border-color: rgba(32, 160, 255, .2);
      color: #20a0ff;
    }
    
    .success {
      background-color: rgba(18, 206, 102, .1);
      border-color: rgba(18, 206, 102, .2);
      color: #13ce66;
    }
    
    .warning {
      background-color: rgba(247, 186, 41, .1);
      border-color: rgba(247, 186, 41, .2);
      color: #f7ba2a;
    }
    
    .danger {
      background-color: rgba(255, 73, 73, .1);
      border-color: rgba(255, 73, 73, .2);
      color: #ff4949;
    }
  `]
})
export class MyTag {
  @Input() text: string = '标签';
  @Input() type: string = '';
  @Input() remove:boolean = false
  getremove(){
    return this.remove
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [MyTag],
  declarations: [MyTag]
})

export class MyTagModule {
}
