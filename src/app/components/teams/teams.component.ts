import { Component, OnInit } from '@angular/core';
import { allTeams } from 'src/app/data/teamsData';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams:any =[];                   //declaration globale
  constructor() { }

  ngOnInit() {
    this.teams=allTeams;
  }

}
