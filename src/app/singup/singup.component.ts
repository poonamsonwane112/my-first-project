import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  msg:any
  username:any;
  password:any
  url='http://localhost:3021'

  
    constructor(private http:HttpClient)
    {
    
    }
    save(data1:any)
    {
      this.username=data1.value.username
      this.password=data1.value.password
      this.http.post(this.url,{"username":data1.value.username,"password":data1.value.password}).subscribe((d)=>{this.msg=d})
      
    }
  }


