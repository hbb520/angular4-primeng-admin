import { Component, OnInit } from '@angular/core';
import {Car, Message, SelectItem} from "../common/car";
import {beforeUrl,pageAnimation} from "../common/public-data";
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-form-primeng',
  templateUrl: './form-primeng.component.html',
  styleUrls: ['./form-primeng.component.css'],
  animations: [
    pageAnimation
  ]
})
export class FormPrimengComponent implements OnInit {
  
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
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
