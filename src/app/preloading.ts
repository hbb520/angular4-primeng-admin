//预加载   我们想到workspace时候的500ms后预加载 所有preload =true 的 组件
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Preload implements PreloadingStrategy {
  preloadedModules: string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<any> {
  if (route.data && route.data['preload']) {
    // add the route path to the preloaded module array
    setTimeout(()=>{
      this.preloadedModules.push(route.path);
      return load();
    },500)
    // log the route path to the console
    // console.log('Preloaded: ' + route.path);
  } else {
    return Observable.of(null);
  }
}
}
