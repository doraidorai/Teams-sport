import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-occurrence',
  templateUrl: './occurrence.component.html',
  styleUrls: ['./occurrence.component.css']
})
export class OccurrenceComponent implements OnInit {
  occForm: FormGroup;
  result:any=[];
  constructor(private x: FormBuilder) { }

  ngOnInit() {
    this.occForm = this.x.group({
      ch: ['', [Validators.required]],
    })
  }

  display(){
    
    let userInput=this.cleanch(this.occForm.value);
    let result=[];
    for (let i = 0; i < userInput.length; i++) {
      let nb=this.occNbr(this.occForm.value.ch,userInput[i]);
      result.push(userInput[i]+":"+nb);
      console.log('here result',this.result);
    }
    // alert(userInput);
  }
 // calculate occ number
 occNbr(chaine:string,c:string): number{
  let nb = 0;
  for (let i = 0; i < chaine.length; i++) {
   if (chaine[i]==c) {
    nb+=1;
   }
    
  }
  return nb;
 }
 // delete doubles
 cleanch(chaine:string): string{
  let result:string="";
  for (let i = 0; i < chaine.length; i++) {
   if (this.occNbr(result,chaine[i])) {
    result=result+chaine[i];
   }
    
  }return result;
 }
}
