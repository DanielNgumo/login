import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.css']
})
export class ReuseComponent {
constructor(public common: CommonService){
this.common.logout();
}


value1='';
value2='';
add(num1: number, num2: number) {
  return num1 + num2;
}

num1(){
this.value1.valueOf();
}
num2(){

}
}
