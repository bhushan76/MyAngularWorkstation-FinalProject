import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksLibService {

  constructor() { }

public booksdetail=[
{bookname:"C prgraming", price:450, author:"Ajay Mittal", NoOfPages:650},
{bookname:"C++ programming", price:400, author:"balguruswami", NoOfPages:460},
{bookname:"java programing", price:450, author:"nageshwar rao", NoOfPages:500},
{bookname:"unix programing", price:350, author:"yashwant kanetkar", NoOfPages:400}


]
getbooks()
{

return this.booksdetail;


}

}
