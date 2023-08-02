import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
stadiums: any = [];
  constructor(private router:Router) { }

  ngOnInit() {
    this.stadiums=JSON.parse(localStorage.getItem("stadiums")|| "[]");
  }
delete(id){
  let stadiumsTab= this.stadiums;
  for (let i = 0; i < stadiumsTab.length; i++) {
    if (stadiumsTab[i].id==id) {
      stadiumsTab.splice(i,1)
    }
    
  }
  localStorage.setItem('stadiums',JSON.stringify(stadiumsTab));
}
goToInfo(id){
  this.router.navigate([`stadiumInfo/${id}`]);
}
}
