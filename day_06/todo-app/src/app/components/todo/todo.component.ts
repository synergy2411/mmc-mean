import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector : "app-todo",
  templateUrl : './todo.component.html',
  styleUrls : [`./todo.component.css`],
  encapsulation : ViewEncapsulation.Emulated
})
export class TodoComponent{

  country : string = 'india';

  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1965"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    votes : 120,
    image : "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
  }

  onChange(value) {
    this.user.votes = value;
  }

  onMoreInfo(usr : any): any{
    alert(`Mr. ${usr.lastName} is working with ${usr.company}!`)
  }

  todoItem = {
    id : 1,
    label : "insurance",
    status : false
  }

}
