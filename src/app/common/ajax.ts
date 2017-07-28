//封装一个http服务
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers,Response} from '@angular/http';
import {beforeUrl} from './public-data';


@Injectable()
export class Ajax {
  url: string = '';                                //接口之前的部分
  Headers: any = {
    'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('userToken')
  };
  
  constructor(public http: Http) {
  }
  
  get(endpoint: string, params?: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }
      options.search = !options.search && p || options.search;
    }
    return this.http.get(this.url + endpoint,options).timeout(5000).catch(this.handleError);
  }
  
  post(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url + endpoint, body, options).timeout(5000).catch(this.handleError);
  }
  
  put(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.url + endpoint, body, options).timeout(5000).catch(this.handleError);
  }
  
  delete(endpoint: string) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    return this.http.delete(this.url + endpoint, options).timeout(5000).catch(this.handleError);
  }
  
  patch(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    return this.http.patch(this.url + endpoint, body, options).timeout(5000).catch(this.handleError);
  }


  //错误信息封装...
  private handleError(error: Response | any) {
    console.log(error);
    let errMsg: string;
    if (error.status == 0) {
      errMsg = `亲~~ 请求未执行,1:服务未启动接口2:api地址错误|error`;
    } else if (error._body.substring(0, 1) == '{') {
      const err = JSON.parse(error._body).defaultMessage || '未知错误';
      if (error.status >= 500) {
        errMsg = `${error.status} ${error.statusText} ${err}|warn`;
      } else if (error.status == 403) {
        errMsg = `${error.status} ${error.statusText} ${err}|info`;
      } else {
        errMsg = `${error.status} ${error.statusText} ${err}|error`;
      }
    } else {
      if (error.status >= 500) {
        errMsg = `${error.status} ${error.statusText} 服务器超时|warn`;
      } else {
        errMsg = `${error.status} ${error.statusText} 服务器错误|error`;
      }
    }
    return Promise.reject(errMsg);
  }
}


