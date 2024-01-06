import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.css']
})
export class NgmodelComponent {

  username='';
  constructor(){
    this.username='';
    console.log(this.username)
  }
}
