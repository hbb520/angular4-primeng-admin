import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request} from '@angular/http';
import {Car} from '../common/car';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {beforeUrl} from '../common/public-data';


@Injectable()
export class WorkspaceService {
  constructor(private http: Http) {
  }

  //获取菜单
  private menuUrl = 'assets/data/user-menu.json';

  getMenu(): Promise<any[]> {
    let url = `${this.menuUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        return res.json();
      })
      .catch(this.handleError);

  }

  //错误信息封装...目前是每一个service最下面面都有这句话
  private handleError(error: Response | any) {
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

}//class end
