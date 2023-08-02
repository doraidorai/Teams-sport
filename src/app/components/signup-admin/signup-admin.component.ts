import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {

  imagePreview:any;
  signupAdminForm:FormGroup;
  errorMsg:String;

  constructor(private X:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupAdminForm = this.X.group({
      firstName:['', [Validators.required , Validators.minLength(3)]],
      lastName:['' , [Validators.required , Validators.minLength(5)]],
      email:['' , [Validators.required , Validators.email]],
      pwd:['' , [Validators.required, Validators.minLength(5),  Validators.maxLength(10) ]],
      img:[''],
      Tel:['',[Validators.required]],
    })
  }

  signup(){
    console.log('here is signup object ', this.signupAdminForm.value);
    this.signupAdminForm.value.role='admin'
    this.userService.Signup(this.signupAdminForm.value,this.signupAdminForm.value.img).subscribe(
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
    this.signupAdminForm.patchValue({ img: file });
    this.signupAdminForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
    

}
