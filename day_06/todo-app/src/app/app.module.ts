import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserInfoComponent } from './components/todo/user-info/user-info.component';
import { UserImgComponent } from './components/todo/user-img/user-img.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [     // Component | Directive | Pipe
    AppComponent,
    TodoComponent,
    UserInfoComponent,
    UserImgComponent,
    PipeDemoComponent,
    CountryCodePipe,
    AddTodoComponent,
    ObservableDemoComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [          // Modules : built-in | Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
