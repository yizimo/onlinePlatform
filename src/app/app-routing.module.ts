import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './user-space/index/index.component';


const routes: Routes = [
  {
    path: 'user-space',
    children: [
      {
        path: 'index',
        component: IndexComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
