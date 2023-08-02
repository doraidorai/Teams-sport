import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stadium-info',
  templateUrl: './stadium-info.component.html',
  styleUrls: ['./stadium-info.component.css']
})
export class StadiumInfoComponent implements OnInit {


stadiumId:any;
findedStadium:any;
title:any='Stadium Info'
  constructor( private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.stadiumId =this.activatedRoute.snapshot.paramMap.get('id');
    let stadiumsTab =JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.findedStadium = stadiumsTab.find((elt) => {return elt.id == this.stadiumId});    
  }

}
