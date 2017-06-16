import {Component, OnInit} from '@angular/core';
import {Car, Message, SelectItem} from '../common/car';
import {beforeUrl, left25Animation, pageAnimation, right25Animation, rotateY90Animation} from '../common/public-data';
import {DataTableService} from './data-table.service';
import NProgress from 'nprogress';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  animations: [
    pageAnimation,
    rotateY90Animation,
    right25Animation,
    left25Animation
  ]
})
export class DataTableComponent implements OnInit {
  constructor(private myService: DataTableService) {
  }
  
  ngOnInit() {
    this.getIndustries();
    NProgress.start();
  }
  
  /************************* 当组件渲染后再调用动画 ********************************/
  tag_state: string = 'start';                           //表格标签动画初始
  page_state: string = 'start';                          //page动画
  button1_state: string = 'start';                         //添加按钮
  button2_state: string = 'start';                         //批量删除按钮动画
  ngAfterViewInit() {
    this.page_state = 'end';
    this.button1_state = 'end';
    this.button2_state = 'end';
  }
  
  /************************* 定义********************************/
  msgs: Message[] = [];                                  //消息
  cars: Car;                                             // get获取数据 {}
  data: Car[];                                           //数据数组
  totalPages: number = 1;                                   //获取总页数
  totalCount: number = 0;                                //总条目数
  first: number = 0;                                     //初始时  分页 组件 停留的页数
  gotoPage: number = 1;                                       //前往页数
  keywordNgModel: string = null;                                //关键字
  mySelection: Car[];                                    //选择
  mySelectionId: Car;                                    //选择的Id
  mySelectionObject: any;                                  //选择时对象
  industriesArray: Car[];                                //行业数组
  industriesSelect: SelectItem[] = [];                   //行业下拉框数组
  industriesSearchNgModel: any = null;                          //行业搜索
  dialog: boolean = false;                               //dialog初始时状态
  dialogHeader: string;                                  //头部信息
  addEditHtmlNgif: boolean = false;                      //添加编辑dialog显示状态   因为primeNg的Dialog因数量而更卡,所以,我们暂时用这种方式来使一个HTML中就只有一个dialog,假使你的页面只有一种类型的Dialog,比如添加,便不容这么麻烦
  addSubmitNgif: boolean = false;                        //添加提交按钮显示状态
  editSubmitNgif: boolean = false;                       //编辑提交按钮显示状态
  deleteHtmlNgif: boolean = false;                       //删除dialog显示状态
  deleteAllHtmlNgif: boolean = false;                    //批量删除dialog显示状态
  deleteAllArrray: any[] = [];                           //批量删除数组
  nameModel: any;                                        //品牌名称ngModel
  timeout: any;                                          //错误信息 msg 时间超时
  
  
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
          NProgress.done();
        }, error => this.msgError(error)
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
              this.tag_state = 'end';
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
    this.tag_state = 'start';                                                                //我们想初始化表格里面的动画
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
        }, error => this.msgError(error)
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
    this.addEditHtmlNgif = true;
    this.addSubmitNgif = true;
    this.dialogHeader = '添加';
    window.setTimeout(() => {
      this.dialog = true;
    }, 1);
  }
  
  add() {
    let params = {
      'name': this.nameModel,
    };
    this.myService.add(params)
      .then(res => {
          console.log(res);
          this.dialog = false;
          this.msg(1, '添加成功');
        }, error => this.msgError(error)
      );
  }
  
  /************************* 编辑 ********************************/
  editShow(car: Car) {
    this.addEditHtmlNgif = true;
    this.editSubmitNgif = true;
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
        }, error => this.msgError(error)
      );
    this.get(this.first + 1);                                                       //我们希望当数据停留在这一页时,分页页码也停留在此页
  }
  
  /************************* 删除 ********************************/
  
  deleteShow(car: Car) {
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
        }, error => this.msgError(error)
      );
    this.get(this.first + 1);
  }
  
  /************************* 批量删除 ********************************/
  deleteAllShow() {
    console.log(this.mySelection);
    if (this.mySelection) {
      if (this.mySelection.length == 0) {
        this.msg(2, '请您至少勾选一条数据');
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
      this.msg(2, '请您至少勾选一条数据');
    }
  }
  
  deleteAll() {
    this.myService.delete(this.deleteAllArrray)
      .then(res => {
          console.log(res);
          this.dialog = false;
        }, error => this.msgError(error)
      );
    this.get(this.first + 1);
  }
  
  /************************* 信息返回函数 ********************************/
  msgError(error) {
    this.msgs.push({severity: <any>error.split('|')[1], detail: <any>error.split('|')[0]});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
  
  msg(num, msg) {
    let type = 'info';
    if (num == 1) {
      type = 'success';
    } else if (num == 2) {
      type = 'info';
    } else if (num == 3) {
      type = 'warn';
    } else if (num == 4) {
      type = 'error';
    }
    this.msgs.push({severity: type, detail: msg});
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.msgs = [];
    }, 3000);
  }
  
  /************************* 当Dialog关闭时回调 ********************************/
  dialogHide(event) {
    this.addEditHtmlNgif = false;
    this.addSubmitNgif = false;
    this.editSubmitNgif = false;
    this.deleteHtmlNgif = false;
    this.deleteAllHtmlNgif = false;
    this.mySelectionObject = null;
  }
}
