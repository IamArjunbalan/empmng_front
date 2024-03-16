import { Component } from '@angular/core';
import { UserSchema } from '../schemas/Userschema';
import { AdminService } from 'src/app/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  constructor(private admin:AdminService,private toastr:ToastrService,private r:Router){

  }
  user:UserSchema={}

  cancel(){
    this.user.empId=""
    this.user.Username=""
    this.user.email=""
    this.user.status=""
    this.r.navigateByUrl('/employee')
  }

  getAddedData(){
    console.log(this.user)
    this.admin.addEmploymentDetails(this.user).subscribe((res:any)=>{
      console.log(res)
      this.toastr.success('Employee details successfully added')
      this.cancel()
    },
    (err)=>{
      console.log(err,'err')
      this.toastr.error("something went wrong!! Employee Registration Failed!!")
    }
    )
  }
  

}
