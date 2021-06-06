import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL ="https://findby-web-rest.herokuapp.com";


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  async login(user: any){
    const result = await this.http.post<any>(`${BASE_URL}/usuarios/login`,user).toPromise();
    if(result && result.valido){
      console.log({result});
      window.localStorage.setItem('user', JSON.stringify(result));
      window.localStorage.setItem('userType', result.tipoUsuario)
      return true;
    }
    return false;

  }

  async createAccount(account:any){
    const result = await this.http.post<any>(`${BASE_URL}/usuarios`,account).toPromise();
    return result;

  }




}
