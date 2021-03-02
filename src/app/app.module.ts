import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { UserSpaceComponent } from './user-space/user-space.component';
import { IndexComponent } from './user-space/index/index.component';
import { ShufflComponent } from './user-space/index/shuffl/shuffl.component';
import { IndexInfoComponent } from './user-space/index/index-info/index-info.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    UserSpaceComponent,
    IndexComponent,
    ShufflComponent,
    IndexInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
