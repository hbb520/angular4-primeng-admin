import {Component, OnInit} from '@angular/core';
import {Message} from '../common/car';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  constructor() {
  }
  
  ngOnInit() {
    this.msgs.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
  }
  
  msgs: Message[] = [];
  head: any = ['证券代码', '名称', '时间维度', '交易量', '其他'];
  cars: any = [
    {
      'dimName': '证券0000',
      'childs': [
        {
          'dimName': '熊',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                '11111', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '2017年06月02日',
              'functionResult': [
                '11112', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '综合',
              'functionResult': [
                '11113', 'a'
              ],
              'high': 1
            }
          ],
          'high': 3
        },
        {
          'dimName': '亚',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                '22221', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '2017年06月02日',
              'functionResult': [
                '22222', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '综合',
              'functionResult': [
                '22223', 'a'
              ],
              'high': 1
            }
          ],
          'high': 3
        },
        {
          'dimName': '运',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                '33331', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '2017年06月02日',
              'functionResult': [
                '33332', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '综合',
              'functionResult': [
                '33333', 'a'
              ],
              'high': 1
            }
          ],
          'high': 3
        },
        {
          'dimName': '综合',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                '33331', 'a'
              ],
              'high': 1
            }
          ],
          
          'high': 1
        }
      ],
      'high': 10
    },
    {
      'dimName': '证券0001',
      'childs': [
        {
          'dimName': '熊2',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                'X-11111', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '2017年06月02日',
              'functionResult': [
                'X-11112', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '综合',
              'functionResult': [
                'X-11113', 'a'
              ],
              'high': 1
            }
          ],
          'high': 3
        },
        {
          'dimName': '亚2',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                'X-22221', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '2017年06月02日',
              'functionResult': [
                'X-22222', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '综合',
              'functionResult': [
                'X-22223', 'a'
              ],
              'high': 1
            }
          ],
          'high': 3
        },
        {
          'dimName': '运2',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                'X-33331', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '2017年06月02日',
              'functionResult': [
                'X-33332', 'a'
              ],
              'high': 1
            },
            {
              'dimName': '综合',
              'functionResult': [
                'X-33333', 'a'
              ],
              'high': 1
            }
          ],
          'high': 3
        },
        {
          'dimName': '综合',
          'childs': [
            {
              'dimName': '2017年06月01日',
              'functionResult': [
                '33331', 'a'
              ],
              'high': 1
            }
          ],
          
          'high': 1
        }
      ],
      'high': 10
    }
  ];
  
  
}
