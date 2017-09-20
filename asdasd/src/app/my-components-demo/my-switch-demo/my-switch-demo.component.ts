import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-switch-demo',
  template: `
    <div class="header">
      <h1>my-switch </h1>
      
      <h3>
        开关
      </h3>
    </div>
    <div class="main">
      <h3>示例1</h3>
      
      
      <my-switch checked></my-switch>
      <my-switch [checked]="false"></my-switch>
      
      <pre>
          &lt;my-switch checked&gt;&lt;/my-switch&gt;  &lt;my-switch [checked]="false"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>示例2</h3>
      
      
      <my-switch disabled></my-switch>
      <my-switch checked [disabled]="true"></my-switch>
      
      
      <pre>
          &lt;my-switch disabled&gt;&lt;/my-switch&gt;  &lt;my-switch checked [disabled]="true"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>示例3</h3>
      
      
      <my-switch [(ngModel)]="enable"></my-switch>
      {{enable}}
      
      
      <pre>
          &lt;my-switch [(ngModel)]="enable"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>示例4事件</h3>
      
      
      <my-switch (change)="onChange()"></my-switch>
      change count {{count}}
      
      
      <pre>
          &lt;my-switch (change)="onChange()"&gt;&lt;/my-switch&gt;
      </pre>
      <h3>示例5onTextoffText</h3>
      
      
      <my-switch onText="是" offText="否"></my-switch>
      
      
      <pre>
          &lt;my-switch onText="是" offText="否"&gt;&lt;/my-switch&gt;   &lt;my-switch offText="否"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>示例6reverse</h3>
      
      
      <my-switch reverse></my-switch>
      
      
      <pre>
          &lt;my-switch reverse&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>示例7color</h3>
      
      
      <my-switch></my-switch>
      <my-switch color="blue"></my-switch>
      <my-switch color="red"></my-switch>
      
      
      <pre>
          &lt;my-switch &gt;&lt;/my-switch&gt;   &lt;my-switch  color="blue"&gt;&lt;/my-switch&gt;    &lt;my-switch color="red"&gt;&lt;/my-switch&gt;
      </pre>
      <h3>示例8switchColor</h3>
      
      
      <my-switch switchColor="red"></my-switch>
      <my-switch switchColor="blue"></my-switch>
      
      
      <pre>
          &lt;my-switch switchColor="red"&gt;&lt;/my-switch&gt;   &lt;my-switch  switchColor="blue"&gt;&lt;/my-switch&gt;
      </pre>
      
      <h3>引入</h3>
      
      <pre>
          MyUiSwitchComponentModule
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
          <td>checked</td>
          <td>boolean</td>
          <td>false</td>
          <td>选中状态</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>boolean</td>
          <td>false</td>
          <td>禁用状态</td>
        </tr>
        <tr>
          <td>[(ngModel)]</td>
          <td></td>
          <td></td>
          <td>支持绑定</td>
        </tr>
        <tr>
          <td>(change)</td>
          <td></td>
          <td></td>
          <td>支持(change)事件</td>
        </tr>
        <tr>
          <td>reverse</td>
          <td></td>
          <td></td>
          <td>翻转</td>
        </tr>
        <tr>
          <td>color</td>
          <td>string</td>
          <td>blue</td>
          <td>true 时 颜色</td>
        </tr>
        
        <tr>
          <td>switchColor</td>
          <td>string</td>
          <td>#fff</td>
          <td>开关中间 圆的 原色</td>
        </tr>
        <tr>
          <td>onText</td>
          <td>string</td>
          <td>ON</td>
          <td>开时文字</td>
        </tr>
        <tr>
          <td>offText</td>
          <td>string</td>
          <td>OFF</td>
          <td>关时文字</td>
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
          <td>.switch</td>
          <td>开关</td>
        
        </tr>
        
        
        </tbody>
      </table>
    
    </div>
  `,
  styleUrls: ['../demo.css']
  
})
export class MySwitchDemoComponent implements OnInit {
  
  
  constructor() {
  }
  
  ngOnInit() {
  
  }
  
  enable: boolean = true;
  count: number = 0;
  
  onChange() {
    this.count++;
  }
  
}
