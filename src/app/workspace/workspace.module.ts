import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WorkspaceComponent} from './workspace.component';
import {workspaceRoutes} from './workspace.routes';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule, AccordionModule, GrowlModule, TooltipModule} from 'primeng/primeng';
import {PageNotFoundComponent} from '../not-found.component';
import {MyGoTopModule} from '../components/my-gotop/my-gotop';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(workspaceRoutes),
    SharedModule,        //  peimrNG 手风琴
    AccordionModule,     //  peimrNG 手风琴
    GrowlModule,         //  peimrNG msg提示
    TooltipModule,       //  Tooltip 提示
    MyGoTopModule,       //  回到顶部组件
  ],
  exports: [],
  declarations: [
    WorkspaceComponent,
    PageNotFoundComponent
  ],
  providers: [

  ],
})
export class WorkspaceModule {
}
