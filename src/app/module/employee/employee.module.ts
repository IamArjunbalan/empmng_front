import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { FormsModule } from '@angular/forms';
import { SearchpipePipe } from './pipes/searchpipe.pipe';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmpListComponent,
    AddempComponent,
    EditempComponent,
    SearchpipePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
    
  ]
})
export class EmployeeModule { }
