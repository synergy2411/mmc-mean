import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todo-app';
  showCmp : boolean = true;
  constructor(private authService : AuthService){}
  ngOnInit(){
    this.authService.onLogin("foo@123", "foo123")
  }
}
