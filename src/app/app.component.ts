import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinePlatform';
  searchName = '';
  isLogin = true;
  constructor() { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }
  search() {

  }

  updateLogin() {

  }
}
