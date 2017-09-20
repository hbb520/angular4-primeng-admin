import {
  NgModule, Component, Input, Output, EventEmitter, OnInit, ElementRef, ViewChild, Renderer, Directive, Inject,
  forwardRef
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {window} from "rxjs/operator/window";

@Component({
  selector: "my-gotop",
  template: `
      <span class="fa fa-angle-double-up my-gotop" (click)="goTop()" *ngIf="goTopState">
    </span>
  `,
  styles: [`
    .my-gotop {
      font-size: 25px;
      position: fixed;
      right: 10px;
      bottom: 10px;
      cursor: pointer;
      z-index: 3000;
      padding: 10px 14px;
      border-radius: 100%;
      background-color: #58b7ff;
      color: #ffffff;
      opacity:0.4;
    }

    .my-gotop:hover {
      background-color: #8492A6;
    }

  `]
})
export class MyGoTop {
  constructor(private el: ElementRef, private renderer: Renderer,) {
    this.renderer.listenGlobal("window", "scroll", (evt: Event) => {
      const osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop > 194) {
        this.goTopState = true;
      }else{
        this.goTopState = false;
      }
    });
  }

  goTopState: boolean = false;

  goTop(): void {
    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop == 0) {
      return;
    }
    let speed = Math.floor(-osTop / 6);
    document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
    setTimeout(() => {
      this.goTop();
    }, 15);
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [MyGoTop, RouterModule],
  declarations: [MyGoTop]
})

export class MyGoTopModule {
}
