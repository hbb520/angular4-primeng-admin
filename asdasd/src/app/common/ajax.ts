/*
 * 封装一个 http 服务
 * ngx-toastr    一个无依赖的全局信息提示组件  https://cipchk.github.io/ngx-notify/
 * 将错误信息字符串返回给 component 层的操作终究麻烦
 *
 * */
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams, Headers, Response} from '@angular/http';
import {beforeUrl} from './public-data';
import 'rxjs/add/operator/timeout';
import {ToastrService} from 'ngx-toastr';
@Injectable()
export class Ajax {
  url: string = beforeUrl;                                //接口之前的部分
  Headers: any = {                                        //Headers
    'Content-Type': 'application/json', 'Authorization': sessionStorage.getItem('userToken')
  };
  timeout: number = 5000;                                 //超时时间
  
  constructor(public http: Http, private toastr: ToastrService) {
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
    let taht = this;
    return this.http.get(this.url + endpoint, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('服务器超时');
              } else {
                taht.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      });
  }
  
  post(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.post(this.url + endpoint, body, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('服务器超时');
              } else {
                taht.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      });
  }
  
  put(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.put(this.url + endpoint, body, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('服务器超时');
              } else {
                taht.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }
  
  delete(endpoint: string) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.delete(this.url + endpoint, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('服务器超时');
              } else {
                taht.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }
  
  patch(endpoint: string, body: any) {
    let headers = new Headers(this.Headers);
    let options = new RequestOptions({headers: headers});
    let taht = this;
    return this.http.patch(this.url + endpoint, body, options).timeout(this.timeout).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          taht.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              taht.toastr.warning(err.message.substring(0, 40));
            } else {
              taht.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              taht.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                taht.toastr.warning('服务器超时');
              } else {
                taht.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }
}


