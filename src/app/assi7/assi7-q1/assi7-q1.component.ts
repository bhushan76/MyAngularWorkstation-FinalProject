import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi7-q1',
  templateUrl: './assi7-q1.component.html',
  styleUrls: ['./assi7-q1.component.css']
})
export class Assi7Q1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  


  name="";
  hide:boolean = true;
  pass='';
  fun(name1,pass1)
  {
  this.name=name1;
  this.pass=pass1;
  }  


  
}
