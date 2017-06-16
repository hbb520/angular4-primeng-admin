import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';
import {Base64} from 'js-base64';
import {LoginService} from './login.service';
import NProgress from 'nprogress';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private myService: LoginService,) {
  }

  ngOnInit() {
    NProgress.done();
  }

  nameModel: any;
  psModel: any ;
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
        .then(res => {
          if (res.status == 200) {
            this.btnLogin = '登 录 中 ...';
            this.realname = JSON.parse(res._body).name;
            sessionStorage.setItem('userToken', this.userToken);
            sessionStorage.setItem('realname', this.realname);
            this.router.navigateByUrl('workspace');

          } else if (res.status == 401) {
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
