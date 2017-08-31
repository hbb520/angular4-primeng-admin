import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {appRoutes} from './app.routes';
import {LoginService} from './login/login.service';
import {Preload} from './preloading';
import {WorkspaceService} from './workspace/workspace.service';
import {DataTableService} from './data-table/data-table.service';
import {Ajax} from './common/ajax';

import {ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      preventDuplicates: true
    }), // 消息弹出
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: Preload}
    ),
  ],
  providers: [
    Ajax,
    Preload,
    LoginService,
    WorkspaceService,
    DataTableService,
  ],
  bootstrap: [AppComponent]
})
/**                     官方推荐将所有的服务放在 app.module 里
 *  Ajax                这是一个把http封装成ajax的服务
 *  Preload             这是一个延迟加载的服务
 *  LoginService        登录
 *  WorkspaceService    工作区域服务
 *  DataTableService    DataTable 服务
 *
 *
 * */
export class AppModule {
}
