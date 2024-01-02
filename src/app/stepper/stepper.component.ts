import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  standalone:true,
  imports: [MatTabsModule,MatSidenavModule],
})
export class StepperComponent {

}
