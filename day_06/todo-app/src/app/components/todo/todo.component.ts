import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { USER_DATA } from 'src/app/model/mocks';
import { User } from 'src/app/model/user';

@Component({
  selector : "app-todo",
  templateUrl : './todo.component.html',
  styleUrls : [`./todo.component.css`],
  encapsulation : ViewEncapsulation.Emulated
})
export class TodoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() title : string;
  country : string = 'india';

  users : User[];

  // Constructor injection
  constructor(){
    // this.user = USER_DATA;
  }

  onMoreInfo(usr : User): any{
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!`)
  }

  todoItem = {
    id : 1,
    label : "insurance",
    status : false
  }

  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
    this.users = USER_DATA
  }
  ngDoCheck(): void {
    console.log("ngDoCheck")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

}
