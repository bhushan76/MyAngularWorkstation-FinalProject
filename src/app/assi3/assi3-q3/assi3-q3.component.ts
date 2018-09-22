import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi3-q3',
  templateUrl: './assi3-q3.component.html',
  styleUrls: ['./assi3-q3.component.css']
})
export class Assi3Q3Component implements OnInit {

  staticAlertClosed = false;
  show = false;
  i = 0;

  constructor() { }

  ngOnInit() {
  }


  fun() {
    setTimeout(() => this.staticAlertClosed = true, 10000);
    this.show = true;
    this.i = this.i + 1;
    console.log(this.i);
     console.log('string interpolation call success');
    // return alert("user defined function called");
  }


}
