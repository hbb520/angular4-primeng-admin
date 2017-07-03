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
        data: {preload: true}
      },
      {
        path: 'primeng-form',
        loadChildren: '../form-primeng/form-primeng.module#FormPrimengModule',
        data: {preload: true}
      },
      {
        path: 'ng-form',
        loadChildren: '../ng-form/ng-form.module#NgFormModule',
        data: {preload: true}
      },
      {
        path: 'input',
        loadChildren: '../input/input.module#InputModule',
        data: {preload: true}
      },
      {
        path: 'charts',
        loadChildren: '../charts/charts.module#ChartsModule',
        data: {preload: true}
      },
      {
        path: 'tree',
        loadChildren: '../tree/tree.module#TreeModule',
        data: {preload: true}
      }, {
        path: 'upload',
        loadChildren: '../upload/upload.module#UploadModule',
        data: {preload: true}
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
