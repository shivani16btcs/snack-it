import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/registerAuth.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }
    private url = 'http://localhost:1234/';
    private foodUrl ='https://api.nal.usda.gov/fdc/v1/foods/search';
    private apiKey= 'wwUP3oTltfjoBm3VpaSpjBkKSb9yXjp7ZmvVpfwO'


    registerUser(bodydata: any) {
        return this.http.post(`${this.url}`,bodydata)  
    }


    loginUser(bodydata:any){
        return this.http.post(`${this.url}`,bodydata)
      }

    getFoodNutrition(foodName:string) {
        const queryParams=`?api_key=${this.apiKey}&query=${foodName}`
        return this.http.get(`${this.foodUrl}`+queryParams)
    }
    
}
