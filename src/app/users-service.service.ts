import { Injectable } from '@angular/core';

//import the httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  getusers: any;

  constructor(private http: HttpClient) { }

  //create a function to get the users data
  getUsers(){
    let url = "https://api.github.com"

    return this.http.get(url)
  }
}
