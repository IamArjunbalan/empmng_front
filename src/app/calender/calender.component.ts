import { Component } from '@angular/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCardModule} from '@angular/material/card';
// import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  selected:any=new Date()

}
