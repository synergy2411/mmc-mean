import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { TodoComponent } from "./components/todo/todo.component";
import { LoginGaurdService } from "./service/login-gaurd.service";

export const APP_ROUTES : Routes = [
  {
    path : "",
    component : TodoComponent
  },{
    path : "pipe",
    component : PipeDemoComponent
  },{
    path : "observable",
    component : ObservableDemoComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "login",
    component : LoginComponent
  },{
    path : "**",
    redirectTo : "/pipe",
    pathMatch : 'full'
  }
]
