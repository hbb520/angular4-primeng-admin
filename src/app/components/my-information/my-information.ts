import {NgModule, Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'my-information',
  template: `
    <div class="my-information fa fa-envelope">
      <span class="my-information-number">{{number}}</span>
    </div>
  `,
  styles: [`
    .my-information {
      display: inline-block;
      color: #FFFFFF;
      font-size: 16px;
      position: relative;
    }

    .my-information-number {
      position: absolute;
      width: 17px;
      height: 17px;
      background-color: #13ce66;
      border-radius: 100%;
      top: -5px;
      left: 10px;
      font-size: 12px;
      line-height: 17px;
    }
  `]
})
export class MyInformation {

  @Input() number: any;

}

@NgModule({
  imports: [CommonModule],
  exports: [MyInformation, RouterModule],
  declarations: [MyInformation]
})

export class MyInformationModule {
}
