import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchsData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: any = [];

  teamToFind: any;
  findedMatches: any = [];

  path:string;

  constructor(private router:Router,
    private matchService:MatchService) { }

  ngOnInit() {
    this.matches = allMatches;
  this.matchService.getAllMatches().subscribe(
    (response)=>{
      console.log("Here response from BE",response.matches);
      this.matches=response.matches;
    }
  );
  }

}
/*  this.teamToFind = JSON.parse(localStorage.getItem('teamToFind'));

    for (let i = 0; i < this.matches.length; i++) {
      if (this.teamToFind.team == this.matches[i].teamOne || this.teamToFind.team == this.matches[i].teamTwo) {

        this.findedMatches.push(this.matches[i]);
      }

    }
    this.path= this.router.url;
    if (this.path == '/allMatches/search') {
      this.matches = this.findedMatches;
    }  */