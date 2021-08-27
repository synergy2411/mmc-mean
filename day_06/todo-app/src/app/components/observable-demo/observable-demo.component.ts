import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  // Producer
  obs$ = new Observable(observer => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000)
    setTimeout(() => {
      observer.next("Second Package")
    }, 3000)
    setTimeout(() => {
      observer.next("Third Package")
    }, 5000)
    setTimeout(() => {
      observer.complete();
    }, 7000)
  })

  unSub$ : Subscription;

  onSubscribe(){
    // Consumer
    this.unSub$=this.obs$.subscribe(
      (result) => {console.log(result)},
      err => {console.log(err)},
      () => {console.log("COMPLETED")}
    )
  }

  onUnsubscribe(){
    this.unSub$.unsubscribe();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
