/**
 * 这里可能放很多公用的api接口
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request} from '@angular/http';
import {Car} from '../common/car';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {beforeUrl} from '../common/public-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  //登录
  private loginUrl = 'assets/login.json';

  login(userToken: string): Promise<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': userToken
      })
    };
    return this.http
      .get(this.loginUrl, httpOptions)
      .toPromise()
      .then(res => res)
      .catch(res => res);
  }

}//class end
