import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-loading-demo',
  template: `
    <div class="header">
      <h1>my-loading </h1>
      
      <h3>
        loading加载
      </h3>
    </div>
    <div class="main">
      <h3>示例1</h3>
      <button (click)="this.loading=true"> 显示 </button>  <button (click)="this.loading=false">消除</button>
      <div class="loading-box" style="position: relative">
        数据展示
        <my-loading [loading]="loading" text="拼命加载中"></my-loading>
      </div>
      

      <pre>
          &lt;my-loading [loading]="loading" text="拼命加载中"&gt;&lt;/my-loading&gt;
        
        
        TS
        
          loading:boolean=false
      </pre>
      
      
      
      <h3>引入</h3>
  
      <pre>
          MyLoadingModule
      </pre>
  
      <h3>属性</h3>
  
      <table class="dataintable">
        <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>[loading]</td>
          <td>boolean</td>
          <td>flase</td>
          <td>loading动画是否执行</td>
        </tr>
        <tr>
          <td>text</td>
          <td>string</td>
          <td>空</td>
          <td>loading  动画 下方的文字提示</td>
        </tr>
 
        </tbody>
      </table>
  
      <h3>样式</h3>
  
      <table class="dataintable">
        <tbody>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>.my-loading-box</td>
          <td>loading壳</td>
          
        </tr>
       
        
    
        </tbody>
      </table>
    
    </div>
  `,
  styleUrls: ['../demo.css']
  
})
export class MyLoadingComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
  loading:boolean=false
  
}
