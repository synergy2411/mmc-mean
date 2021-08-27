import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseURL : string = "http://localhost:9000";

  constructor(private httpClient: HttpClient) { }

  getData(){
    return USER_DATA;
  }

  getRestData(){
    return this.httpClient.get(`${this.baseURL}/todos`)
  }

  createItem(label : string, amount : number){
    return this.httpClient.post(`${this.baseURL}/todos`, {label, amount})
  }
}
