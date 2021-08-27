import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserInfoComponent } from './components/todo/user-info/user-info.component';
import { UserImgComponent } from './components/todo/user-img/user-img.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';


@NgModule({
  declarations: [     // Component | Directive | Pipe
    AppComponent,
    TodoComponent,
    UserInfoComponent,
    UserImgComponent,
    PipeDemoComponent,
    CountryCodePipe,
    AddTodoComponent
  ],
  imports: [          // Modules : built-in | Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
