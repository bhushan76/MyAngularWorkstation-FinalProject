import { Component, OnInit } from '@angular/core';
import { BooksLibService } from '../books-lib.service';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor(private bookslib : BooksLibService) { }
  public Bname;
  ngOnInit() {
    this.Bname = this.bookslib.getbooks();
  }

public h1:boolean=true;

getdetails(){

this.h1=false

}


}
