import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees:any=[]
  d:any = new Date()
  searchKey:any=""

  constructor(private admin:AdminService,private toastr:ToastrService){

    

  }
  ngOnInit(){
    this.getData()
    
  }
  getData(){
    this.admin.getEmployees().subscribe((res:any)=>{
      console.log(res)
      this.employees=res.filter((item:any)=>item.id!="1")
      console.log(this.employees)
    })

  }

  handleDelete(id:any){
    this.admin.deleteEmployee(id).subscribe((res:any)=>{
      this.toastr.success("Employee deleted successfully!!")
      this.getData()

    },
    (err:any)=>{
      this.toastr.error("Employee deletion failed",err)
    })
    

  }
  exportToPdf(){
    let doc = new jsPDF()
    let head=[['EmpId','Username','email','status']]
    let body:any=[]
    this.employees.forEach((item:any)=>{
      body.push([item.empId,item.Username,item.email,item.status])
    })
    doc.setFontSize(16)
    doc.text("All Employee List",10,10)
    autoTable(doc,{
      head,body
    })
    doc.output("dataurlnewwindow")
    doc.save("allemployees.pdf")
  }

  sortByUserID(){
    this.employees.sort((user1:any,user2:any)=>user1.empId-user2.empId)
  }
  
  
  sortByUsername(){
    this.employees.sort((user1:any,user2:any)=>user1.Username.localeCompare(user2.Username))
  }

}
