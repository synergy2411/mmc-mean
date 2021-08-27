import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(){
    return USER_DATA;
  }
}
