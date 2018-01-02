import {Component, OnInit} from '@angular/core';
import {beforeUrl, China, pageAnimation, tagAnimation} from '../common/public-data';
import {DataTableService} from './data-table.service';
import {ToastrService} from 'ngx-toastr';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    pageAnimation,
    tagAnimation
  ]
})
export class DataTableComponent implements OnInit {
  constructor(private myService: DataTableService,
              private toastr: ToastrService) {

  }

  ngOnInit() {
    this.getIndustries();
    this.getCitys();
    this.China = China;
  }

  /************************* 定义********************************/
  cars: any;                                             // get获取数据 {}
  data: any[];                                           //数据数组
  totalPages: number = 1;                                //获取总页数
  totalCount: number = 0;                                //总条目数
  first: number = 0;                                     //初始时  分页 组件 停留的页数
  gotoPage: number = 1;                                  //前往页数

  mySelection: any[];                                    //选择
  mySelectionId: any;                                    //选择的Id
  mySelectionObject: any;                                //选择时对象
  dialog: boolean = false;                               //dialog初始时状态
  dialogHeader: string;                                  //头部信息
  addHtmlNgif: boolean = false;                      //添加编辑dialog显示状态   因为primeNg的Dialog因数量而更卡,所以,我们暂时用这种方式来使一个HTML中就只有一个dialog,假使你的页面只有一种类型的Dialog,比如添加,便不容这么麻烦
  editHtmlNgif: boolean = false;
  deleteHtmlNgif: boolean = false;                       //删除dialog显示状态
  deleteAllHtmlNgif: boolean = false;                    //批量删除dialog显示状态
  deleteAllArrray: any[] = [];                           //批量删除数组

  nameModel: any;                                        //品牌名称
  timeout: any;                                          //错误信息 msg 时间超时
  tag_state: string = 'active';                          //表格标签动画初始
  industriesArray: any[];                                //行业数组
  industriesSelect: SelectItem[] = [];                   //行业选择框
  industriesSearchNgModel: any;
  keywordNgModel: any;
  startTime: any;
  China: any;                                            // 时间 选择 框 China 化
  /************************* 获取数据 ********************************/
  get(pageNo) {
    let params = {
      'pageNo': pageNo,
      'industryId': this.industriesSearchNgModel,
      'keyword': this.keywordNgModel
    };
    this.myService.get(params)
      .then(cars => {
          this.cars = cars;
          this.first = pageNo - 1;
        }, error => console.log(error)
      )
      .then(
        () => {
          if (this.cars) {
            this.data = [];
            for (let i = 0; i < this.cars.data.length; i++) {
              for (let k = 0; k < this.industriesArray.length; k++) {
                if (this.cars.data[i].industryId == this.industriesArray[k].id) {
                  this.cars.data[i].industryId = this.industriesArray[k].name;
                }
              }
              this.cars.data[i].logo = beforeUrl + this.cars.data[i].logo;
            }
            this.data = this.cars.data;
            if (this.data.length == 0) {
              this.data = [];
            }                                                                                   //没有数据时跳到第一页
            this.totalPages = this.cars.totalPage;
            this.totalCount = this.cars.totalCount;
            window.setTimeout(() => {
              this.tag_state = 'inactive';
            }, 10);                                                                            //加载完成时候执行表格内部内容动画
            console.log(this.data);
          } else {
            this.data = [];
          }
        }
      );
  }

  /************************* 分页函数 ********************************/
  paginate(event) {
    const num = event.page + 1;
    this.gotoPage = num;
    this.tag_state = 'active';                                                                //我们想初始化表格里面的动画
    this.get(num);
  }

  /************************* 前往页数 ********************************/
  blurGotoPage() {
    if (this.gotoPage > this.totalPages) {
      this.gotoPage = this.totalPages;
    }
    this.get(this.gotoPage);
  }

  /************************* 行业数据 ********************************/
  getIndustries() {
    this.myService.getIndustries()
      .then(industriesArray => {
          this.industriesArray = industriesArray;
        }, error => console.log(error)
      )
      .then(
        () => {
          this.get(1);
          if (this.industriesArray) {
            for (let i = 0; i < this.industriesArray.length; i++) {
              this.industriesSelect.push({
                label: this.industriesArray[i].name,
                value: this.industriesArray[i].id
              });
            }
          } else {
            this.industriesArray = [];
          }
        }
      );
  }

  /************************* 添加 ********************************/
  addShow() {
    this.addHtmlNgif = true;
    this.dialogHeader = '添加';
    window.setTimeout(() => {
      this.dialog = true;
    }, 1);
  }

  /************************* 添加 ********************************/
  add() {
    let params = {
      'name': this.nameModel,
    };
    this.myService.add(params)
      .then(res => {
          console.log(res);
          this.dialog = false;
          this.toastr.success('添加成功');
        }, error => console.log(error)
      );
  }

  /************************* 编辑 ********************************/
  editShow(car: any) {
    this.editHtmlNgif = true;
    this.dialogHeader = '编辑';
    window.setTimeout(() => {
      this.dialog = true;
    }, 1);
    this.mySelectionObject = car;
    this.mySelectionId = car.id;
    this.nameModel = car.name;                                                  //当然这里是应该进行http请求的
  }

  edit() {
    let params = {
      'id': this.mySelectionId,
      'name': this.nameModel,
    };
    this.myService.edit(params)
      .then(res => {
          console.log(res);
          this.dialog = false;
        }, error => console.log(error)
      );
    this.get(this.first + 1);                                                       //我们希望当数据停留在这一页时,分页页码也停留在此页
  }

  /************************* 删除 ********************************/

  deleteShow(car: any) {
    this.deleteHtmlNgif = true;
    this.dialogHeader = '删除';
    window.setTimeout(() => {
      this.dialog = true;
    }, 1);
    this.mySelectionObject = car;
    this.deleteAllArrray = [car.id];
  }

  delete() {
    this.myService.delete(this.deleteAllArrray)
      .then(res => {
          console.log(res);
          this.dialog = false;
        }, error => console.log(error)
      );
    this.get(this.first + 1);
  }

  /************************* 批量删除 ********************************/
  deleteAllShow() {
    console.log(this.mySelection);
    if (this.mySelection) {
      if (this.mySelection.length == 0) {
        this.toastr.info('请您至少勾选一条数据');
      } else {
        this.deleteAllHtmlNgif = true;
        this.dialogHeader = '批量删除';
        window.setTimeout(() => {
          this.dialog = true;
          this.deleteAllArrray = [];
          for (let i = 0; i < this.mySelection.length; i++) {
            this.deleteAllArrray.push(this.mySelection[i].id);
          }
        }, 1);
      }
    } else {
      this.toastr.info('请您至少勾选一条数据');
    }
  }

  deleteAll() {
    this.myService.delete(this.deleteAllArrray)
      .then(res => {
          console.log(res);
          this.dialog = false;
        }, error => console.log(error)
      );
    this.get(this.first + 1);
  }

  /************************* 省级联动 ********************************/
  citys: any;                                             //省级 数据
  city1Array: any = [];
  city1NgModel: any;
  city2Array: any = [];
  city2NgModel: any;
  city2Disabled: boolean = true;
  city3Array: any = [];
  city3NgModel: any;
  city3Disabled: boolean = true;
  //获取省市区县数据
  getCitys() {
    this.myService.getCitys()
      .then(citys => {
          this.citys = citys;
        }, res => this.toastr.error('获取失败')
      )
      .then(
        () => {
          for (let i in  this.citys) {
            if (parseInt(i) % 10000 === 0) {
              this.city1Array.push({
                label: this.citys[i],
                value: i
              });
            }

          }
        }
      );
  }

  //省级 或 直辖市 级 下拉框change 事件
  city1onChange() {
    this.city2Array = [];
    for (let i in  this.citys) {
      if (parseInt(i.substring(0, 2)) == this.city1NgModel.substring(0, 2)) {
        if (parseInt(i) % 100 === 0 && parseInt(i) % 10000 != 0) {
          this.city2Array.push({
            label: this.citys[i],
            value: i
          });
        }
        if (i.substring(0, 2) == '11' || i.substring(0, 2) == '12' || i.substring(0, 2) == '82' || i.substring(0, 2) == '81'
          || i.substring(0, 2) == '50' || i.substring(0, 2) == '31'
        ) {
          if (parseInt(i) % 10000 != 0) {
            this.city2Array.push({
              label: this.citys[i],
              value: i
            });
          }
        }
      }
    }
    if (this.city2Array.length == 0) {
      this.city2Disabled = true;
      this.city3Disabled = true;
      this.city3Array = [];
    } else {
      this.city2Disabled = false;
      this.city3Disabled = true;
      this.city3Array = [];
    }
  }

  //第二个个下拉框change 事件
  city2onChange() {
    this.city3Array = [];
    for (let i in  this.citys) {
      if (parseInt(i.substring(0, 4)) == this.city2NgModel / 100) {
        if (parseInt(i) % 100 != 0) {
          this.city3Array.push({
            label: this.citys[i],
            value: i
          });
        }
      }
    }
    if (this.city3Array.length == 0) {
      this.city3Disabled = true;
    } else {
      this.city3Disabled = false;
    }
  }


  /************************* 当Dialog关闭时回调 ********************************/
  dialogHide(event) {
    this.addHtmlNgif = false;
    this.editHtmlNgif = false;
    this.deleteHtmlNgif = false;
    this.deleteAllHtmlNgif = false;
    this.mySelectionObject = null;
  }

}
