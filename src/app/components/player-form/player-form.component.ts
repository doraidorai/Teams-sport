import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { allPlayers } from 'src/app/data/playersData';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  title: string = 'Add Player';
  playerForm: FormGroup;
  players: any = allPlayers;
  player: any = {};
  playerId: any;

  constructor(private ActivatedRoute: ActivatedRoute,
    private playerService:PlayerService) { }

  ngOnInit() {
    this.playerId = this.ActivatedRoute.snapshot.paramMap.get('id');


    if (this.playerId) {
      this.title = 'edit player';

      this.player = this.players.find(
        (obj: any) => { return obj.id == this.playerId }
      )

    }
  }
  addOrEditPlayer() {
console.log("Added with sucess",this.player);
this.playerService.addPlayer(this.player).subscribe();
  }

}


