import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadopokemonService {

  fav=[];

  constructor(private http: HttpClient) { }

  getdata(url){
    return this.http.get(`${url}`);

  }

  setfav(fav){
    this.fav.push(fav);
  }
  getfav(){
    return this.fav;
  }
}
