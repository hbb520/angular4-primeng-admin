import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-breadcrumb-demo',
  template: `
    <div class="header">
      <h1>my-breadcrumb</h1>
      
      <h3>
        面包屑;待完善
      </h3>
    </div>
    <div class="main">
      <h3>示例1</h3>
      <my-breadcrumb name1="首页" name2="第二"></my-breadcrumb>
      <my-breadcrumb name1="首页" name2="回到历史页" name3="回到历史页" name4="第四"></my-breadcrumb>
      <pre>
          &lt;my-breadcrumb name1="首页" name2="第二"&gt;&lt;/my-breadcrumb&gt;
         &lt;my-breadcrumb name1="首页" name2="回到历史页" name3="回到历史页" name4="第四"&gt;&lt;/my-breadcrumb&gt;
      </pre>
      
      <h3>示例2</h3>
      <my-breadcrumb name1="首页" name2="前往workspace/color" name3="第三" link2="workspace/color"></my-breadcrumb>
      <my-breadcrumb name1="首页" name2="前往workspace/color" name3="前往workspace/icon" name4="第四" link2="workspace/color" link3="workspace/icon"></my-breadcrumb>
      <pre>
          &lt;my-breadcrumb name1="首页" name2="前往workspace/color" name3="第三" link2="workspace/color"&gt;&lt;/my-breadcrumb&gt;
           &lt;my-breadcrumb name1="首页" name2="前往workspace/color" name3="前往workspace/icon" name4="第四" link2="workspace/color" link3="workspace/icon"&gt;&lt;/my-breadcrumb&gt;
      </pre>
      
      <h3>引入</h3>
      
      <pre>
          MyBreadcrumbModule
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
          <td>name1</td>
          <td>string</td>
          <td>null</td>
          <td>首位置</td>
        </tr>
        <tr>
          <td>name2</td>
          <td>string</td>
          <td>null</td>
          <td>第二位置</td>
        </tr>
        <tr>
          <td>name3</td>
          <td>string</td>
          <td>null</td>
          <td>第三位置</td>
        </tr>
        <tr>
          <td>name4</td>
          <td>string</td>
          <td>null</td>
          <td>第四位置</td>
        </tr>
        <tr>
          <td>link2</td>
          <td>string</td>
          <td>null</td>
          <td>第二位置路由地址,当不写时默认回到历史页</td>
        </tr>
        <tr>
          <td>link3</td>
          <td>string</td>
          <td>null</td>
          <td>第三位置路由地址,当不写时默认回到历史页</td>
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
          <td>.my-breadcrumb</td>
          <td>壳</td>
        
        </tr>
        <tr>
          <td>.fa-angle-double-right</td>
          <td>图标</td>
        
        </tr>
        
        
        </tbody>
      </table>
    
    </div>
  `,
  styleUrls: ['../demo.css']
  
})
export class MyBreadcrumbDemoComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
  
  
}
