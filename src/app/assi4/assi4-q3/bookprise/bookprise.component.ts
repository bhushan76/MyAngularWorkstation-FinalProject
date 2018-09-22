import { Component, OnInit } from '@angular/core';
import { BooksLibService } from '../books-lib.service';
BooksLibService
@Component({
  selector: 'app-bookprise',
  templateUrl: './bookprise.component.html',
  styleUrls: ['./bookprise.component.css']
})
export class BookpriseComponent implements OnInit {

  constructor(private bookslib : BooksLibService) { }
  public Bname;
  ngOnInit() {
    this.Bname = this.bookslib.getbooks();
  }
  public h3:boolean=true;

  getprice()
  {

this.h3=false;


  }

}
