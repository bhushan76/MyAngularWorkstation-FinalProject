import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi5-q1',
  templateUrl: './assi5-q1.component.html',
  styleUrls: ['./assi5-q1.component.css']
})
export class Assi5Q1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

genders='';
  fill(name,address,gender,mobile,college,email,batch)
  {
console.log("name="+name.value+"\n"+"address="+address.value);
console.log("mobile="+mobile.value)
console.log("college="+college.value)
console.log("Email="+email.value)
console.log("batch="+batch.value)
console.log("gender="+this.genders);
  }





}
