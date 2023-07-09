import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }


  getCharacter(params: any){
    return this.http.get(environment.baseUrl + '/' + environment.character + '/' + params)
  }

  getAllCharacters(){
    return this.http.get(environment.baseUrl + '/' + environment.character)
  }
}

