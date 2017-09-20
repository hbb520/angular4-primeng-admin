import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {
  PanelMenuModule,
  TabMenuModule,   //tabMenu
  AutoCompleteModule,
  ButtonModule,  //Button
  PanelModule,     //容器
  InputTextModule,
  DataTableModule,  //表格
  DialogModule,   //浮层
  SplitButtonModule,
  TabViewModule,  //table
  AccordionModule,//手风琴
  SharedModule,
  CalendarModule,
  GrowlModule,//弹出框
  MultiSelectModule,//多选
  ListboxModule,//多选框
  DropdownModule,//下拉
  CheckboxModule,//多选
  MessagesModule,//Messages
  PaginatorModule,//分页
  ConfirmDialogModule,//删除弹出框
  InputTextareaModule,// InputTextarea
  OverlayPanelModule,
  TooltipModule,
  CodeHighlighterModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MyBreadcrumbDemoComponent} from './my-breadcrumb-demo.component';
import {MyBreadcrumbModule} from '../../components/my-breadcrumb/my-breadcrumb';






@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    ReactiveFormsModule,


    MyBreadcrumbModule,
    CodeHighlighterModule,

    RouterModule.forChild([
      { path:'',component:MyBreadcrumbDemoComponent}
    ])
  ],
  declarations: [MyBreadcrumbDemoComponent],
  exports:[RouterModule]
})
export class MyBreadcrumbDemoModule { }
