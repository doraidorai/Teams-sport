import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  StadiumForm:FormGroup
  constructor(private X:FormBuilder) { }

  ngOnInit() {

this.StadiumForm=this.X.group({
name:['',[Validators.required ]],
country:['',[Validators.required ]],
capacite:['',[Validators.required ]],

})



  }
 
addStadium(){
  console.log('Here stadium ', this.StadiumForm.value);
  // get objects From LS
  let stadiumsTab=JSON.parse(localStorage.getItem('stadiums') || "[]");
 //affect ID to object
  this.StadiumForm.value.id= this.genrateId(stadiumsTab) +1;
  stadiumsTab.push(this.StadiumForm.value);
  localStorage.setItem('stadiums',JSON.stringify(stadiumsTab));
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
