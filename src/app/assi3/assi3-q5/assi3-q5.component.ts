import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assi3-q5',
  templateUrl: './assi3-q5.component.html',
  styleUrls: ['./assi3-q5.component.css']
})
export class Assi3Q5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dynamicBool = false;
  dynamic = 'Marvellous';




  changeText() {
    if (this.dynamicBool === false) {
      this.dynamic = 'Marvellous Infosystems';
      this.dynamicBool = true;
    } else {
      this.dynamic = 'Mr. Piyush Khairnar';
      this.dynamicBool = false;
    }
  }

}
