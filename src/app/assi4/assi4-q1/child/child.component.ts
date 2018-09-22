//import { Component, OnInit } from '@angular/core';
import { Component, OnInit ,Input ,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public parentsend;

  @Output() public childdata=new EventEmitter(); 
  
  public childproperty:any="";
  
  textfromchild(data)
  {
  this.childproperty=data;
  
  this.childdata.emit(this.childproperty);


}
}