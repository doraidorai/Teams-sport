import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.css']
})
export class TeamsInfoComponent implements OnInit {
teams:any= allTeams;
teamId: any;
findedTeam: any;
  constructor(private ActivatedRoote: ActivatedRoute) { }

  ngOnInit() {
    this.teamId= this.ActivatedRoote.snapshot.paramMap.get('id');
    this.findedTeam= this.teams.find((obj:any) => {return obj.id == this.teamId})
  }

}
