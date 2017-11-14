/*
 * 封装一个 http 服务
 * ngx-toastr    一个无依赖的全局信息提示组件  https://cipchk.github.io/ngx-notify/
 * 将错误信息字符串返回给 component 层的操作终究麻烦
 *
 * */
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {Response} from '@angular/http';
import 'rxjs/add/operator/timeout';
import {beforeUrl} from './public-data';
import {ToastrService} from 'ngx-toastr';  //错误提示消息
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Ajax {
  url: string = beforeUrl;

  constructor(public http: HttpClient, private toastr: ToastrService) {
  }

  httpOptionsFunction() {
    let httpOptions: any = {};
    if (sessionStorage.getItem('userToken')) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('userToken')
        })
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    }
    return httpOptions;
  }

  parseParams(params: any): HttpParams {
    let ret = new HttpParams();
    if (params) {
      // tslint:disable-next-line:forin
      for (const key in params) {
        let _data = params[key];
        if (_data) {
          if (_data === '') {
            params[key] = null;
          } else if (Array.isArray(_data)) {
            if (params[key].length == 0) {
              params[key] = null;
            }
          } else {
            ret = ret.set(key, _data);
          }

        }
      }
    }
    return ret;
  }

  get(endpoint: string, params?: any) {
    let that = this;
    let httpOptions: any = {};
    if (sessionStorage.getItem('userToken')) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('userToken')
        }),
        params: this.parseParams(params)
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: this.parseParams(params)
      };
    }
    return this.http.get(this.url + endpoint, httpOptions).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          that.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              that.toastr.warning(err.message.substring(0, 40));
            } else {
              that.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              that.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                that.toastr.warning('服务器超时');
              } else {
                that.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    let that = this;
    return this.http.post(this.url + endpoint, body, this.httpOptionsFunction()).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          that.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              that.toastr.warning(err.message.substring(0, 40));
            } else {
              that.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              that.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                that.toastr.warning('服务器超时');
              } else {
                that.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    let that = this;
    return this.http.put(this.url + endpoint, body, this.httpOptionsFunction()).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          that.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              that.toastr.warning(err.message.substring(0, 40));
            } else {
              that.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              that.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                that.toastr.warning('服务器超时');
              } else {
                that.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  delete(endpoint: string, reqOpts?: any) {
    let that = this;
    return this.http.delete(this.url + endpoint, this.httpOptionsFunction()).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          that.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              that.toastr.warning(err.message.substring(0, 40));
            } else {
              that.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              that.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                that.toastr.warning('服务器超时');
              } else {
                that.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    let that = this;
    return this.http.put(this.url + endpoint, body, this.httpOptionsFunction()).catch(
      (error: Response | any) => {
        if (error.status == 0) {
          that.toastr.info('请求未执行,1:服务未启动2:api地址错误');
        } else {
          if (error._body) {
            const err = JSON.parse(error._body);
            if (error.status >= 500) {
              that.toastr.warning(err.message.substring(0, 40));
            } else {
              that.toastr.error(err.message.substring(0, 40));
            }
          } else {
            if (error.status >= 500) {
              that.toastr.error('服务器超时');
            } else {
              if (error.message == 'Timeout has occurred') {
                that.toastr.warning('服务器超时');
              } else {
                that.toastr.warning('服务器错误');
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  }

}

