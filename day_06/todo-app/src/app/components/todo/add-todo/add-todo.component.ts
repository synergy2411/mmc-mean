import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';


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
  @Output() onAddNew = new EventEmitter<{label : string; amount : number}>()

  constructor(
      private fb : FormBuilder
      ) {
    this.addTodoForm = this.fb.group({
      label : this.label,
      amount : this.amount
    })
  }

  onAddItem(){
   this.onAddNew.emit({
     label : this.addTodoForm.value.label,
     amount : this.addTodoForm.value.amount
    })
    this.addTodoForm.reset();
  }

  ngOnInit(): void {
  }

}
