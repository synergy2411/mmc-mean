import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { UserInfoComponent } from './components/todo/user-info/user-info.component';
import { UserImgComponent } from './components/todo/user-img/user-img.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';


@NgModule({
  declarations: [     // Component | Directive | Pipe
    AppComponent,
    TodoComponent,
    UserInfoComponent,
    UserImgComponent,
    PipeDemoComponent,
    CountryCodePipe
  ],
  imports: [          // Modules : built-in | Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
