import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchURL: string = 'http://localhost:3000/matches'; // destination Address

  constructor(private httpClient: HttpClient) { }   //httpClient : Livreur 


  //Response : Array of Objects
  getAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.matchURL);
  }

  //Response : One Object
  getMatchById(id) {
    return this.httpClient.get<{ match: any }>(this.matchURL + '/' + id); //ALL time TYPE is Chaine de characters
  }

  //Response : Boolean (true or False) / String
  deleteMatchById(id) {
    return this.httpClient.delete<{message:String}>(this.matchURL + '/' + id);
  }

  //Response : Boolean     ------ post (is like Send (meaning))
  addMatch(matchObj) {
    return this.httpClient.post<{ msg: String }>(this.matchURL, matchObj);
  }

  //Response : Object/ Boolean/String
  //matchObj : new values + ID
  editMatch(matchObj) {
    return this.httpClient.put<{ message: String }>(this.matchURL, matchObj);
  }
}


// httpClient  ---> 1. actions  + @address: du Serveur Back-End
//actions: post,GET, put, delete 
// @serveur BE: http://localhost:3000@par défaut
