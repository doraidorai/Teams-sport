import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  courses: any = [];
  toppings = {};
  empForm:FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.courseService.getAllCourses().subscribe(
    //   (response) => { this.courses = response.courses }
    // );
    this.empForm = this.formBuilder.group({
      course: [''],
    });
  }
  get name() {
    return this.empForm.get('name');
  }


}
