import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {workspaceRoutes} from './workspace/workspace.routes';
import NProgress from 'nprogress';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  ngOnInit() {
    /*头部服务*/
    this.routerList.forEach(
      group => {
        this.componentList = group.children;
      }
    );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        NProgress.start();    //顶部进度条
      }
      
      if (event instanceof NavigationEnd) {
        NProgress.done();
        this.componentList.forEach(
          list => {
            if (this.router.url.indexOf(list.path) >= 0) {
              this.titleService.setTitle(list.title);
            }
          }
        );
      }
    });
  }
  
  constructor(private router: Router, private titleService: Title) {
  };
  
  routerList = workspaceRoutes;
  componentList = [];
  searchComponent = null;
  
  
}
