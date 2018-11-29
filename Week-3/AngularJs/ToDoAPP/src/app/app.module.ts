import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistEditComponent } from './Todolist/todolist-edit/todolist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodolistEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
