import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  contactNumber = 987654321;

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("here the data comes...")
    }, 3000)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
