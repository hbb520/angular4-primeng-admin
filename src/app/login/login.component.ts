import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {Base64} from 'js-base64';
import {LoginService} from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private myService: LoginService,) {
  }

  ngOnInit() {

  }

  nameModel: any;
  psModel: any;
  btnLogin: string = '登 录';
  loginerrortext: string = '';
  userToken: string;
  realname: string;


  login() {
    if (!this.nameModel || !this.psModel) {
      this.loginerrortext = '请填写账号密码';
    } else {
      this.userToken = `Basic ${Base64.encode(this.nameModel + ':' + this.psModel)}`;
      this.myService.login(this.userToken)
        .subscribe(res => {
          this.btnLogin = '登 录 中 ...';
          sessionStorage.setItem('userToken', this.userToken);
          console.log(res);
          if (res.name === this.nameModel) {
            this.router.navigateByUrl('workspace');
          } else {
            this.loginerrortext = '您输入的账号密码有误';
          }
        }, err => {
          if (err.status == 401) {
            this.loginerrortext = '您输入的账号密码有误';
          } else {
            this.loginerrortext = '服务器正忙,请稍后再试';
          }
        });
    }
  }

  inputFocus() {
    this.loginerrortext = '';
  }
}
