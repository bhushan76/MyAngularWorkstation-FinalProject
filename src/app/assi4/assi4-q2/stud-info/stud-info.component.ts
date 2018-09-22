
import { Component, OnInit } from '@angular/core';
import {StudListService} from '../stud-list.service'
import {Observable, Subscriber} from 'rxjs'

@Component({
  selector: 'app-stud-info',
  templateUrl: './stud-info.component.html',
  styleUrls: ['./stud-info.component.css']
})
export class StudInfoComponent implements OnInit {

  constructor(private _infosesrvice: StudListService) { }

  public data1=[];

  ngOnInit() {

this._infosesrvice.getinfo()
.subscribe(data =>this.data1=data);


  }



public Hvalue:boolean= true;
public H2value:boolean=true; 
public studName1=[];
public studDetail=[];
Studname()
{
  this.Hvalue=false;
this.studName1=this.data1;

}

Studdetail()
{

  this.H2value=false;
  this.studDetail=this.data1;

}


}
