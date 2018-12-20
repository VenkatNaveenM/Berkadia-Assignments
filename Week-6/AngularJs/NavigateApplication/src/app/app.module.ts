import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { MyPageComponent } from 'src/app/mypage/mypage.component';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    MyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
