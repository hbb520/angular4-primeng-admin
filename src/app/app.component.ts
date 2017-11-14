import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {workspaceRoutes} from './workspace/workspace.routes';
import {NgProgress} from 'ngx-progressbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit {
  ngOnInit() {

  }

  constructor(private router: Router, private titleService: Title, public progressService: NgProgress) {
    this.routerList.forEach(
      group => {
        this.componentList = group.children;
      }
    );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.progressService.start();
      }

      if (event instanceof NavigationEnd) {
        this.progressService.done();
        this.componentList.forEach(
          list => {
            if (this.router.url.indexOf(list.path) >= 0) {
              this.titleService.setTitle(list.title);
            }
          }
        );
      }
    });
  };

  routerList = workspaceRoutes;
  componentList = [];
  searchComponent = null;


}
