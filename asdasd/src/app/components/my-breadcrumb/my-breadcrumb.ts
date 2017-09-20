import {NgModule, Component, Input, Output, EventEmitter} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Location}               from "@angular/common";
@Component({
  selector: "my-breadcrumb",
  template: `
      <div class="my-breadcrumb">
          <span>{{name1}}</span>
          <span class="fa fa-angle-double-right" *ngIf="name2"></span>
          <a (click)="goBack()">{{name2}}</a>
          <span class="fa fa-angle-double-right" *ngIf="name3"></span>
          <a>{{name3}}</a>
      </div>
  `,
  styles: [`
      .my-breadcrumb {
          padding: 14px 0 14px 15px;
          margin-bottom: 10px;
          background-color: #eef1f6;
      }
      .my-breadcrumb span{
        font-size: 14px;
      }
      .my-breadcrumb a {
          color: #0099E6;
          cursor: pointer;
          font-size: 14px;
      }

      .my-breadcrumb a:hover {
          text-decoration: underline;
      }

      .fa-angle-double-right {
          margin: 0 10px;
      }
  `]
})
export class MyBreadcrumb {
  constructor(private location: Location) {
  };

  @Input() name1: string;
  @Input() name2: string;
  @Input() name3: string;

  goBack(): void {
    if (this.name3) {
      this.location.back();
    }
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [MyBreadcrumb, RouterModule],
  declarations: [MyBreadcrumb]
})

export class MyBreadcrumbModule {
}
