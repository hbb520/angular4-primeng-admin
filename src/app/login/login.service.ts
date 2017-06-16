/**
 * 这里可能放很多公用的api接口
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request} from '@angular/http';
import {Car} from "../common/car";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {beforeUrl} from "../common/public-data";
@Injectable()
export class LoginService {
  constructor(private http: Http) {}
  //登录
  private loginUrl = beforeUrl+'/users/info';
  login(userToken:string): Promise<Car>{
    let headers = new Headers({ 'Content-Type': 'application/json' ,"Authorization": userToken});
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get(this.loginUrl,options)
      .toPromise()
      .then(res=>res)
      .catch(res=>res);
  }

}//class end
