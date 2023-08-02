import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-stadium',
  templateUrl: './search-stadium.component.html',
  styleUrls: ['./search-stadium.component.css']
})
export class SearchStadiumComponent implements OnInit {
obj:any={};
findedStadium:any=[];
  constructor() { }

  ngOnInit() {
  }
searchSatadium(){
  console.log('here let stadium to search',this.obj)
  let stadiumsTab=JSON.parse(localStorage.getItem('stadiums')|| "[]");
  this.findedStadium=[];
  for (let i = 0; i < stadiumsTab.length; i++) {
    if (stadiumsTab[i].name==this.obj.stadiumName) {
      this.findedStadium.push(stadiumsTab[i]);

    }
    
  }

}
}
