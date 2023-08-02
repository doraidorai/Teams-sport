import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allMatches } from 'src/app/data/matchsData';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  constructor(private router: Router,
    private matchservice: MatchService) { }

  ngOnInit() {
    this.matchservice.getAllMatches().subscribe(
      (response) => {
        this.matches = response.matches;
      }
    );
  }

  goToDisplay(x: number) {

    this.router.navigate([`matchInfo/${x}`]);
  }
  goToEdit(x: number) {
    this.router.navigate([`editMatch/${x}`]);
  }
  deleteMatch(id){
    this.matchservice.deleteMatchById(id).subscribe(
      (response)=>{
        console.log("Here response after delete",response.message);
        this.matchservice.getAllMatches().subscribe(
          (response) => {
            this.matches = response.matches;
          }
        );
      }
    )
  }
}
