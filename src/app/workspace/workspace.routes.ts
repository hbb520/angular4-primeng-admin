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
        loadChildren: '../tree/tree.module#TreeModule',
        title: 'tree'
      }, {
        path: 'color',
        loadChildren: '../color/color.module#ColorModule',
        title: 'color'
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
        path: 'data-table2',
        loadChildren: '../data-table2/data-table2.module#UploadModule',
        data: {preload: true},
        title: 'data-table2'
      }, {
        path: 'my-breadcrumb-demo',
        loadChildren: '../my-components-demo/my-breadcrumb-demo/my-breadcrumb-demo.module#MyBreadcrumbDemoModule',
        title: '面包屑'
      }, {
        path: 'my-switch-demo',
        loadChildren: '../my-components-demo/my-switch-demo/my-switch-demo.module#MySwitchDemoModule',
        title: '开关'
      }, {
        path: 'my-tag-demo',
        loadChildren: '../my-components-demo/my-tag-demo/my-tag-demo.module#MyTagDemoModule',
        title: '标签'
      }, {
        path: 'my-loading-demo',
        loadChildren: '../my-components-demo/my-loading-demo/my-loading-demo.module#MyLoadingDemoModule',
        title: '加载'
      }, {
        path: 'my-carousel-demo',
        loadChildren: '../my-components-demo/my-carousel-demo/my-carousel-demo.module#MyCarouselDemoModule',
        title: '跑马灯'
      },
      {
        path: '**',
        component: PageNotFoundComponent
      },
    ]
  }
];
