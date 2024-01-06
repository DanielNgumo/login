import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {



  isValid: boolean = true;
  dateObject: number;
  name: string;
  timeObject: number;
  wquantity: any;
  quantity: number;
  wquatity: any;

  quantity1() {
    const wquantity = 200;
  }
  constructor() {
    this.dateObject = new Date().getDate();
    this.name = 'DANIEL';
    this.timeObject = new Date().getTime();
    this.quantity = 1000;
  }

  update(e: any, maName: string) {
    // console.log('updated');
    // console.log("All is well");
    // console.log(maName);
    console.log(e);
  }
  updated() {
    console.log('Daniel');
  }
  saved(e: any) {
    // alert(e.target.value);
    console.log(e.target.value);
  }

  onKeydown(e: any) {
    console.log('t');
  }

  showImage: boolean = false;
}
