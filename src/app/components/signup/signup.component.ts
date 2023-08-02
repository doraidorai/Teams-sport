import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  imagePreview:any;
  signupForm: FormGroup; //id Form
  errorMsg:String;

  constructor(private X:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupForm = this.X.group({
      firstName:['', [Validators.required , Validators.minLength(3)]],
      lastName:['' , [Validators.required , Validators.minLength(5)]],
      email:['' , [Validators.required , Validators.email]],
      pwd:['' , [Validators.required, Validators.minLength(5),  Validators.maxLength(10) ]],
      img:[''],
    })
  }

  signup(){
    console.log('here is signup object ', this.signupForm.value);
    this.signupForm.value.role='user'
    this.userService.Signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (response)=>{
        console.log("Here response after signup ",response.msg);
        if (response.msg) {
          this.router.navigate(["login"]);
        } else {
          this.errorMsg="Error with signup";
        }
      }
    );
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
    
}
