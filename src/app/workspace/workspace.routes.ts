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
        path: 'color',
        loadChildren: '../color/color.module#ColorModule',
        // data: {preload: true}
      }, {
        path: 'icon',
        loadChildren: '../icon/icon.module#IconModule',
        // data: {preload: true}
      }, {
        path: 'citys',
        loadChildren: '../citys/citys.module#CitysModule',
        // data: {preload: true}
      }, {
        path: 'upload',
        loadChildren: '../upload/upload.module#UploadModule',
        // data: {preload: true}
      },
      {
        path: 'data-table2',
        loadChildren: '../data-table2/data-table2.module#UploadModule',
        data: {preload: true}
      }, {
        path: 'my-breadcrumb-demo',
        loadChildren: '../my-components-demo/my-breadcrumb-demo/my-breadcrumb-demo.module#MyBreadcrumbDemoModule'
        // data: {preload: true}
      }, {
        path: 'my-switch-demo',
        loadChildren: '../my-components-demo/my-switch-demo/my-switch-demo.module#MySwitchDemoModule'
        // data: {preload: true}
      }, {
        path: 'my-tag-demo',
        loadChildren: '../my-components-demo/my-tag-demo/my-tag-demo.module#MyTagDemoModule'
        // data: {preload: true}
      }, {
        path: 'my-loading-demo',
        loadChildren: '../my-components-demo/my-loading-demo/my-loading-demo.module#MyLoadingDemoModule'
        // data: {preload: true}
      }, {
        path: 'my-carousel-demo',
        loadChildren: '../my-components-demo/my-carousel-demo/my-carousel-demo.module#MyCarouselDemoModule'
        // data: {preload: true}
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
