import { Component, OnInit } from '@angular/core';
import {Car, Message, SelectItem} from "../common/car";
import {beforeUrl, left25Animation, pageAnimation, right25Animation, rotateY90Animation,} from "../common/public-data";
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-form-primeng',
  templateUrl: './form-primeng.component.html',
  styleUrls: ['./form-primeng.component.css'],
  animations: [
    pageAnimation,
    rotateY90Animation,
    right25Animation,
    left25Animation
  ]
})
export class FormPrimengComponent implements OnInit {

  /************************* 当组件渲染后再调用动画 ********************************/
  tag_state: string = "start";                           //表格标签动画初始
  page_state:string =  "start";                          //page动画
  button1_state:string = 'start'                         //添加按钮
  button2_state:string = 'start'                         //批量删除按钮动画
  ngAfterViewInit(){
    this.page_state = "end";
    this.button1_state = 'end'
    this.button2_state = 'end'
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({label:'Select Gender', value:''});
    this.genders.push({label:'Male', value:'Male'});
    this.genders.push({label:'Female', value:'Female'});
  }

  msgs: Message[] = [];
  userform: FormGroup;
  submitted: boolean;
  genders: SelectItem[];
  description: string;

  onSubmit(value: string) {
    this.submitted = true;
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Success', detail:'Form Submitted'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
