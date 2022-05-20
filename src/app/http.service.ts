import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import v  from './data.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let arr=[]
    for(let i=0;i<v.length;i++){
      let obj ={
        id: v[i].id,
        name: v[i].name,
        description: v[i].description,
        price: v[i].price,
        url: v[i].url,
        amount:1
      }
      arr.push(obj)
    }
    return arr;
  }
  getUserByID(id:number){
    
    return v.filter(x=>x.id==id)[0]
  }
}
