import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL : string = "http://localhost:9000";
  private token : string = null;

  constructor(private httpClient : HttpClient) { }

  onLogin(username: string, password: string){
    this.httpClient.post(`${this.baseURL}/login`, {username, password})
      .subscribe(
        (response) => {
          console.log("LOGIN RESPONSE - ", response)
          this.token = response['token'];
        },
        (err) => console.log(err)
      )
  }

  isAuthenticated(){
    return this.token != null;
  }

}
