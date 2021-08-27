import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core'
import { Todo } from 'src/app/model/todo';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector : "app-todo",
  templateUrl : './todo.component.html',
  styleUrls : [`./todo.component.css`],
  encapsulation : ViewEncapsulation.Emulated
})
export class TodoComponent implements OnChanges, OnInit, OnDestroy
// DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
{

  @Input() title : string;
  country : string = 'india';

  users : User[];

  // Constructor injection
  constructor(private dataService : DataService){
  }

  onMoreInfo(usr : User): any{
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!`)
  }

  todoItem = {
    id : 1,
    label : "insurance",
    status : false
  }

  todoCollection : Todo[];
  showCmp: boolean = false;

  addItem({label, amount}){
    this.dataService.createItem(label, amount)
      .subscribe(response => {
        this.loadRestData()
        this.showCmp = false;
      })
  }

  private loadRestData(){
    this.dataService.getRestData()
      .subscribe((response : Todo[]) => {
        this.todoCollection = response;
      })
  }

  ngOnChanges(){
    // console.log("ngOnChanges")
  }
  ngOnInit(): void {
    this.loadRestData()
    // console.log("ngOnInit")
    // this.users = this.dataService.getData()
  }
  // ngDoCheck(): void {
  //   console.log("ngDoCheck")
  // }
  // ngAfterContentInit(): void {
  //   console.log("ngAfterContentInit")
  // }
  // ngAfterContentChecked(): void {
  //   console.log("ngAfterContentChecked")
  // }
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit")
  // }
  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked")
  // }
  ngOnDestroy(): void {
    // console.log("ngOnDestroy")
  }

}
