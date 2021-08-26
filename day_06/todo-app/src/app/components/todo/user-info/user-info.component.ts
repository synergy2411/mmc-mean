import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  @Input() user : User;

  myDynamicClass = {'my-border' : false, 'my-feature' : true}

  myStyle = {
    borderBottom : '2px red solid'
  }

  onToggleClasses(){
    this.myDynamicClass['my-border'] = !this.myDynamicClass['my-border']
    this.myDynamicClass['my-feature'] = !this.myDynamicClass['my-feature']
  }

}
