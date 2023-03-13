import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

constructor(
  private HttpClient : HttpClient,
) { }

  createEmployee(payload){
    console.log(' logSomething!',payload);
    let url = "http://localhost:3000/employees"
    return this.HttpClient.post(url,payload);
  }

}
