import { Component, OnInit } from '@angular/core';
import { BooksLibService } from '../books-lib.service';
@Component({
  selector: 'app-bookname',
  templateUrl: './bookname.component.html',
  styleUrls: ['./bookname.component.css']
})
export class BooknameComponent implements OnInit {

public Bname;

  constructor(private bookslib : BooksLibService ) { }

  ngOnInit() {

this.Bname = this.bookslib.getbooks();

  }

  public h2:boolean=true;
  getname()
  {

this.h2=false;


  }

}
