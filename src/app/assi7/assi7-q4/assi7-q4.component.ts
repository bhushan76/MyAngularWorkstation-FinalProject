import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  position: number;
  name: string;
 auther: string;
  pages: number;
  price: Number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'C programming', auther: 'ajay mittal', pages: 300, price:500},
  {position: 2, name: 'C++ programming', auther: "balguruswami", pages:400, price:550},
  {position: 3, name: 'java programming', auther: "nageshwar rao", pages: 500, price:600},
  {position: 4, name: 'PHP programming', auther: "xyz", pages: 600, price:650},
  {position: 5, name: 'c# programming', auther: "abc", pages: 700, price:700},

  
];

@Component({
  selector: 'app-assi7-q4',
  templateUrl: './assi7-q4.component.html',
  styleUrls: ['./assi7-q4.component.css']
})
export class Assi7Q4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['position', 'name', 'auther', 'pages', 'price'];
  dataSource = ELEMENT_DATA;
}
