import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-tag-demo',
  template: `
    <div class="header">
      <h1>my-tag </h1>
      
      <h3>
        标签
      </h3>
    </div>
    <div class="main">
      <h3>示例1</h3>
      
   
        <my-tag></my-tag>
        <my-tag text="通过" type="gray"></my-tag>
        <my-tag text="通过" type="primary"></my-tag>
        <my-tag text="通过" type="success"></my-tag>
        <my-tag text="通过" type="warning"></my-tag>
        <my-tag text="通过" type="danger"></my-tag>
  
        <my-tag text="不通过" type="danger" [remove]="true"></my-tag>
    
      <pre>
          &lt;my-tag &gt;&lt;/my-tag&gt;
          &lt;my-tag text="通过" type="gray"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="通过" type="primary"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="通过" type="success"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="通过" type="warning"&gt;&lt;/my-tag&gt;
          &lt;my-tag text="通过" type="danger"&gt;&lt;/my-tag&gt;
        
         &lt;my-tag text="不通过" type="danger" [remove]="true"&gt;&lt;/my-tag&gt;
      </pre>
      
      
      
      <h3>引入</h3>
  
      <pre>
          MyTagModule
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
          <td>text</td>
          <td>string</td>
          <td>'标签'</td>
          <td>标签中文字</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>无</td>
          <td>标签颜色,有 空 gray primary success warning danger</td>
        </tr>
        <tr>
          <td>[remove]</td>
          <td>boolean</td>
          <td>false</td>
          <td>remove icon是否显示</td>
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
          <td>.my-tag-box</td>
          <td>标签</td>
          
        </tr>
       
        
    
        </tbody>
      </table>
    
    </div>
  `,
  styleUrls: ['../demo.css']
  
})
export class MyTagComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
 
  
}
