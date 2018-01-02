import {NgModule}       from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
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
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UploadComponent} from './upload.component';
import {MyBreadcrumbModule} from '../components/my-breadcrumb/my-breadcrumb';

import {NgUploaderModule} from 'ngx-uploader';
import {ElChildModules} from 'element-angular';


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

    MyBreadcrumbModule,
    NgUploaderModule,


    ElChildModules.ElTagsModule,
    ElChildModules.ElProgressModule,
    ElChildModules.ElCardsModule,

    RouterModule.forChild([
      {path: '', component: UploadComponent}
    ])
  ],
  declarations: [UploadComponent],
  exports: [RouterModule]
})
export class UploadModule {
}
