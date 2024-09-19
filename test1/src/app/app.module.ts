import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { todo1component } from './shared/component/todo1/todo1.component';
import { todo2component } from './shared/component/todo2/todo2.component';
import { todo3component } from './shared/component/todo3/todo3.component';
import { std1component } from './shared/component/std1/std1.component';
import { std2component } from './shared/component/std2/std2.component';
import { FormsModule } from '@angular/forms';
import { std3component } from './shared/component/std3/std3.component';

@NgModule({
  declarations: [
    AppComponent,
    todo1component,
    todo2component,
    todo3component,
    std1component,
    std2component,
    std3component
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
