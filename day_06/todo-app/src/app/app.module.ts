import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';


@NgModule({
  declarations: [     // Component | Directive | Pipe
    AppComponent,
    TodoComponent
  ],
  imports: [          // Modules : built-in | Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
