import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allMatches } from 'src/app/data/matchsData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  matches: any = allMatches; // variables globales d'une methode or function
  matchId: any;
  findedMatch: any;

  constructor(private activatedRoute: ActivatedRoute,
    private matchservice: MatchService) { }    // ActivatedRoute  actuellement Active Only

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id')     // snapshot pour capturer id

    this.matchservice.getMatchById(this.matchId).subscribe(
      (response) => {
        this.findedMatch = response.match;
      }
    );



  }
}

// CONSTRUCTOR :creation instances pour creer des variables or parametre
/*    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id == this.matchId) {
        this.findedMatch= this.matches[i];
        break;
      }

    }
  } */

  //obj: variable locale d'une methode or function
  // this.findedMatch= this.matches.find((obj:any) => {return obj.id == this.matchId});