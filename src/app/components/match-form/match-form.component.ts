import { Component, OnInit } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchsData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {
  matchForm: FormGroup;
  match: any = {};

  // findedMatch:any;
  matches: any = allMatches;  //recupérer tableu matches...
  title: string = 'add match';

  matchId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService,
    private router:Router) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');

    //matchId existe --> go to edit
    if (this.matchId) {
      this.title = 'edit match';
      this.matchService.getMatchById(this.matchId).subscribe(
        (response) => {
          console.log("here response",response.match);
          
          this.match = response.match;
        }
      )
      // this.match = this.matches.find(
      //   (obj: any) => { return obj.id == this.matchId }
      // )

    }
  }

  addOrEditMatch() {
    console.log("this is", this.match);
    if (this.matchId) {
      this.matchService.editMatch(this.match).subscribe(
        (response) => {
          console.log("Here response from BE", response.message);
        }
      );
    } else {
      this.matchService.addMatch(this.match).subscribe(
        (response) => {
          console.log("Here response from BE", response.msg);
        }
      );
    }
    this.router.navigate(['admin']);
  }

}
