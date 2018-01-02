import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pageAnimation} from '../common/public-data';
import {DataTableService} from './data-table.service';


@Component({
  templateUrl: './add.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    pageAnimation
  ]
})
export class DataTableAdd implements OnInit {
  constructor(private myService: DataTableService, private route: ActivatedRoute) {

    console.log(route);

  }

  ngOnInit() {
    this.params = this.route.params;
    console.log(this.params.value.id);
  }

  params: any;
  text: string;
  nameModel: string;
  shopManagerModel: any;
  phoneModel: any;
  detailedAddressModel: any;

  add() {

  }
}
