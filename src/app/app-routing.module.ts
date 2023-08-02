import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayersInfoComponent } from './components/players-info/players-info.component';
import { TeamsInfoComponent } from './components/team-info/teams-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { OccurrenceComponent } from './components/occurrence/occurrence.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumInfoComponent } from './components/stadium-info/stadium-info.component';
import { SearchStadiumComponent } from './components/search-stadium/search-stadium.component';
import { WeatherComponent } from './components/weather/weather.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';




const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'matchForm',component:MatchFormComponent},
  {path:'playerForm',component:PlayerFormComponent},
  {path:'addTeam',component:AddTeamComponent},
  {path:'editTeam',component:EditTeamComponent},
  {path:'allMatches',component:MatchesComponent},
  {path:'allPlayers',component:PlayersComponent},
  {path:'allTeams',component:TeamsComponent},
  {path:'admin', component:AdminComponent},
  {path:'matchInfo/:id', component:MatchInfoComponent},
  {path:'playerInfo/:id', component:PlayersInfoComponent},
  {path:'teamInfo/:id', component:TeamsInfoComponent},
  {path:'addMatch', component:MatchFormComponent},
  {path:'editMatch/:id',component:MatchFormComponent},
  {path:'searchMatch', component:SearchMatchComponent},
  {path:'allMatches/search', component:MatchesComponent},
  {path:'editPlayer/:id', component:PlayerFormComponent},
  {path:'addPlayer', component:PlayerFormComponent},
  {path:'occurrence',component:OccurrenceComponent},
  {path:'addstadium',component:AddStadiumComponent},
  {path:'stadiumInfo/:id',component:StadiumInfoComponent},
  {path:'searchstadium',component:SearchStadiumComponent},
  {path:'editTeam/:id',component:AddTeamComponent},
  {path:'weather',component:WeatherComponent},
  {path:'signupAdmin',component:SignupAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
