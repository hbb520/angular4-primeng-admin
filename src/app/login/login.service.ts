/**
 * 这里可能放很多公用的api接口
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {beforeUrl} from '../common/public-data';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  //登录
  private loginUrl = 'assets/login.json';
  login(userToken: string): Observable<any> {
    let httpOptions: any;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': userToken
      })
    };
    let url = this.loginUrl;
    return this.http
      .get(url,httpOptions)
      .pipe(
        tap((res: any) => res),
        catchError((error: Response | any) => {
          return Promise.reject(error);
        })
      );
  }

}//class end
