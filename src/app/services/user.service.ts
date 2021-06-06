import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL ="https://findby-web-rest.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  async getUnauthorizedUsers(){
    const result = await this.http.get<any>(`${BASE_URL}/usuarios`).toPromise();
    return result;

  }

}
