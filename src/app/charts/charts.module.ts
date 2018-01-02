import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from "@angular/router";
import {
  ButtonModule,  //Button
  PanelModule,     //容器
  InputTextModule,
  DataTableModule,  //表格
  DialogModule,   //浮层
  SharedModule,
  CalendarModule,
  GrowlModule,//弹出框
  MultiSelectModule,//多选
  DropdownModule,//下拉
  CheckboxModule,//多选
  PaginatorModule,//分页
  OverlayPanelModule,
  TooltipModule,
  ChartModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";
import {MyBreadcrumbModule} from "../components/my-breadcrumb/my-breadcrumb";
import {ChartsComponent} from "./charts.component";




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,

    ButtonModule,
    PanelModule,
    InputTextModule,
    DataTableModule,
    DialogModule,
    SharedModule,
    CalendarModule,
    GrowlModule,
    MultiSelectModule,
    DropdownModule,
    CheckboxModule,
    PaginatorModule,
    TooltipModule,
    OverlayPanelModule,
    ChartModule,
    MyBreadcrumbModule,


    RouterModule.forChild([
      { path:'',component:ChartsComponent}
    ])
  ],
  declarations: [ChartsComponent],
  exports:[RouterModule]
})
export class ChartsModule { }
