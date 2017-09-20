import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-carousel-demo',
  template: `
    <div class="header">
      <h1>my-carousel</h1>
      <h3>
        走马灯
      </h3>
    </div>
    <div class="main">
      <h3>示例1</h3>
      <my-carousel [data]="data"></my-carousel>
      
      <pre>
          &lt;my-tag text="通过" type="gray"&gt;&lt;/my-tag&gt;
      </pre>
      
      
      <h3>引入</h3>
      
      <pre>
          MyCarouselModule
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
export class MyCarouselComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
  
  data: any = [
    {
      id: 1,
      url: 'http://img3.imgtn.bdimg.com/it/u=2394710700,966464643&fm=26&gp=0.jpg'
    }, {
      id: 2,
      url: 'http://img0.imgtn.bdimg.com/it/u=684221303,3713808293&fm=26&gp=0.jpg'
    }, {
      id: 3,
      url: 'http://img2.imgtn.bdimg.com/it/u=2521560077,4294837135&fm=26&gp=0.jpg'
    }, {
      id: 4,
      url: 'http://img2.imgtn.bdimg.com/it/u=4208974821,3718248003&fm=26&gp=0.jpg'
    }
  ];
}
