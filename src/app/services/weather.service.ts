import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
WeatherURL:string= 'http://localhost:3000/api/weather'; 
  constructor(private httpClient:HttpClient) { 


  }
  searchCity(searchobj){
    return this.httpClient.post<{result:any}>(this.WeatherURL,searchobj);
  }
}
