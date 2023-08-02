import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams:any =[];                   //declaration globale

  path:string;

  isDisplayed:boolean= false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.teams=allTeams;
    this.path = this.router.url;    //récuperer path url
    

    if (this.path=='/admin') {
      this.isDisplayed= true;
    }
  }

  goToDisplay(x:number){
    this.router.navigate([`teamInfo/${x}`]);
  }

}
