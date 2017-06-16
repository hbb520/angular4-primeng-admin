import {NgModule, Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'my-information',
  template: `
    <div class="my-information fa fa-envelope">
      <span class="my-information-number" *ngIf="number1!=0">{{number1}}</span>
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
  number1:any=0;
  speed:any = 1;
  ngAfterViewInit() {
    this.getNum()
  }

  getNum(){
    if (this.number <=20){
      if (this.number1 != this.number){
        this.number1 = this.number1 +1
        this.speed = this.speed + 0.6
        setTimeout(()=>{
          this.getNum()
        },5*this.speed)
      }else {
        this.number1 = this.number
      }
    }else {
      this.number1 = this.number
    }
  }


}

@NgModule({
  imports: [CommonModule],
  exports: [MyInformation, RouterModule],
  declarations: [MyInformation]
})

export class MyInformationModule {
}
