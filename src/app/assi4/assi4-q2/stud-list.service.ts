import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IStudinfo} from './Istudinfo';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class StudListService {

  constructor(private http : HttpClient) { }
private _url:string="./assets/Data/list.json"
getinfo()
{

return this.http.get<IStudinfo[]>(this._url);


}

}




