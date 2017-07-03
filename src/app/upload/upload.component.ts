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
  cars: any = [{
    'vin': '1984',
    'year': [{
      'year1': '银行业',
      'year2': [{
        'year3': '银行业1',
      },
        {
          'year3': '银行业2',
        }, {
          'year3': '银行业3',
        }]
    }, {
      'year1': '农业',
      'year2': [{
        'year3': '农业1',
      }]
    }, {
      'year1': '牧业',
      'year2': [{
        'year3': '牧业1',
      }]
    }],
    
  }];
}
