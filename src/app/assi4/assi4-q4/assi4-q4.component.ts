import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi4-q4',
  templateUrl: './assi4-q4.component.html',
  styleUrls: ['./assi4-q4.component.css']
})
export class Assi4Q4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  h1:boolean=true;
  h2:boolean=true;
  h3:boolean=true;


  showd(){

this.h1=!this.h1;


  }

  showo(){

    this.h2=!this.h2;

  }

  showl(){

    this.h3=!this.h3;

  }

}
