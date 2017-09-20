import {Injectable} from '@angular/core';
import {Car} from '../common/car';
import {Http, Response}  from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Ajax} from '../common/ajax';


@Injectable()
export class DataTableService {
  
  constructor(public ajax: Ajax, public http: Http) {
  }
  
  private extractJson(res: Response) {
    let body = res.json();
    return body || {};
  }
  
  //数据获取
  private getUrl = 'assets/data.json';
  
  get(params): Promise<Car[]> {
    return this.ajax.get(this.getUrl, params)
      .toPromise()
      .then(this.extractJson);
  }
  
  //行业获取
  private getIndustriesUrl = 'assets/industries.json';
  
  getIndustries(): Promise<Car[]> {
    return this.ajax.get(this.getIndustriesUrl)
      .toPromise()
      .then(this.extractJson);
  }
  
  //添加
  private addUrl = 'add';
  
  add(params): Promise<Car> {
    return this.ajax.post(this.addUrl, params)
      .toPromise()
      .then((res) => res);
  }
  
  //编辑
  private editUrl = 'edit';
  
  edit(params): Promise<Car> {
    return this.ajax.put(this.editUrl, params)
      .toPromise()
      .then((res) => res);
  }
  
  //删除
  private deleteUrl = 'delete';
  
  delete(params): Promise<Car> {
    let url = this.deleteUrl + '?ids=' + params;
    return this.ajax.patch(url, params)
      .toPromise()
      .then((res) => res);
    
  }
  
  //最新省级 json  获取http://passer-by.com/data_location/list.json
  private citysUrl = 'http://passer-by.com/data_location/list.json';
  
  getCitys(): Promise<Car[]> {
    let url = this.citysUrl;
    return this.http.get(url)
      .toPromise()
      .then(this.extractJson)
      .catch(res => res);
  }
  
  
}
