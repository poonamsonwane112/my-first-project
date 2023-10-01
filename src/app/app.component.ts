// import { Component } from '@angular/core';
// import {*} as $ from '../../node_modules/jquery/dist/jquery.min.js';
import { Component, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
//   title = 'my-first-project';
//  a:any;
// b:any;
// msg:any;
// // number=12;
// // name="sachin ";
// // birthday = new Date(1996, 3, 21);
// // list=[12,12,4,5,78,41,23];
// // student={
// // "name":"sachin",
// // "address":"pune",


// // }
// abc(data:any)
// {
// this.a=data.value.user
// this.b=data.value.pass
// this.msg="save sucessfully";

// console.log("save");
// }



// msg="sucessfully cereated";
// birthday = new Date(1996, 3, 21);
// num=13
// d=150;
number=23;
result:any;
age=20;
// list=[12,12,4,5,78,41,23,100];



student=
{
  "name":"madhav",
  "id":101,
  "city":"latur"
}

checkEvenOdd()
{
  if (this.number % 2 === 0) {
    this.result = 'number is Even';
   
  } else {
    this.result = 'Odd';
    
  }
}

// constructor()
// {
//    this.checkEvenOdd()
//    console.log(this.result)
// }

title = 'app works!';

     ngAfterViewInit()
     {
      $(document).ready(function()
       {
        $("p").css("background-color", "yellow");
        });
     }
}


