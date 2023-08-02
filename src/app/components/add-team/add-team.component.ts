import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { allTeams } from 'src/app/data/teamsData';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
addTeamForm:FormGroup;
stadiums:any=[];
teams:any=allTeams;
teamId:any;
obj:any={};
title:String='add team'

  constructor(private teamService:TeamService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.stadiums=JSON.parse(localStorage.getItem('stadiums')|| "[]");
    this.teamId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.teamId) {
      this.title = 'edit team';

      this.obj = this.teams.find(
        (obj: any) => { return obj.id == this.teamId }
      )

    }
  }
addTeam(){
  console.log('this is',this.obj);
  this.teamService.addTeam(this.obj).subscribe();
  // if (this.teamId) {
  //   this.teamService.editTeam(this.obj).subscribe();
  // } else {
  //   this.teamService.editTeam(this.obj).subscribe();
  // }
    
  
  }

genrateId(T) {
  let max;
  if (T.length==0) {
      max=0;
  }else{
      max=T[0].id
      for (let i = 0; i < T.length; i++) {
          if (T[i].id>max) {
              max=T[i].id
          }
          
      }
  }
  return max;
}
}
  // let teamsTab=JSON.parse(localStorage.getItem('teams')|| "[]");
  // this.obj.id=this.genrateId(teamsTab)+1;
  // teamsTab.push(this.obj);
  // localStorage.setItem('teams',JSON.stringify(teamsTab));