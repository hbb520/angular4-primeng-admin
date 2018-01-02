import {WorkspaceComponent} from './workspace.component';
import {PageNotFoundComponent} from '../not-found.component';

export const workspaceRoutes = [
  {
    path: '',
    component: WorkspaceComponent,
    children: [
      {
        path: '', redirectTo: 'data-table', pathMatch: 'full'
      },
      {
        path: 'data-table',
        loadChildren: '../data-table/data-table.module#MyDataTableModule',
        title: '普通表格'
      },
      {
        path: 'primeng-form',
        loadChildren: '../form-primeng/form-primeng.module#FormPrimengModule',
        title: 'primeng表格'
      },
      {
        path: 'ng-form',
        loadChildren: '../ng-form/ng-form.module#NgFormModule',
        title: '验证'
      },
      {
        path: 'input',
        loadChildren: '../input/input.module#InputModule',
        title: 'input'
      },
      {
        path: 'charts',
        loadChildren: '../charts/charts.module#ChartsModule',
        title: 'charts'
      },
      {
        path: 'tree',
        loadChildren: '../tree/tree.module#TreeDemoModule',
        title: 'tree'
      }, {
        path: 'icon',
        loadChildren: '../icon/icon.module#IconModule',
        title: 'icon'
      }, {
        path: 'citys',
        loadChildren: '../citys/citys.module#CitysModule',
        title: '省级联动'
      }, {
        path: 'upload',
        loadChildren: '../upload/upload.module#UploadModule',
        title: '上传'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
