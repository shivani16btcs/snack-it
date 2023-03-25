import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/registerAuth.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    private url = 'http://localhost:1234/';


    registerUser(bodydata: any) {
        return this.http.post(`${this.url}`,bodydata)  
    }


    loginUser(bodydata:any){
        return this.http.post(`${this.url}`,bodydata)
      }
    
}
