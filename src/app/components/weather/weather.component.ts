import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
weatherForm:FormGroup;
weather:any;
iconURL:String;
city:any={};
  constructor(private x:FormBuilder,
    private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherForm= this.x.group({
      city:['',[Validators.required]],
    })
  }
searchCity(){
  console.log('here is signup object ', this.weatherForm.value);
this.weatherService.searchCity(this.weatherForm.value).subscribe(
  (response)=>{
    console.log("Here response from BE",response.result);
    this.weather= response.result;
this.iconURL= `https://openweathermap.org/img/wn/${response.result.icon}@2x.png`;
  }
);
}
}
