import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  label = new FormControl('',[
    Validators.required,
    Validators.minLength(6)
  ])
  amount = new FormControl('', [
    Validators.required
  ])

  addTodoForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.addTodoForm = this.fb.group({
      label : this.label,
      amount : this.amount
    })
  }

  onAddItem(){
    console.log(this.addTodoForm)
  }

  ngOnInit(): void {
  }

}
