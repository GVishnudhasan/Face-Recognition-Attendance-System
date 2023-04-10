import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  NgForm,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Gender: any[] = ["Male", "Female", "Other"];

  form: any = {
    name: "",
    rollno: "",
    email: "",
    gender: "",
    password: ""
  };

  // signUpForm : FormGroup | any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  // name: any;
  // rollno: any;
  // gender: any;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.signUpForm = this.fb.group({   
    //   name: ['',Validators.required],
    //   password: ['',Validators.required],
    //   rollno: ['',Validators.required],
    //   email: ['',Validators.required],
    //   gender: ['',Validators.required]
    // })

  }

  onSubmit(): void {
    const { name, rollno, email, gender, password } = this.form;
    console.log(name, rollno, email, gender, password)

    this.authService.register(name, rollno, email, gender, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log(err, this.errorMessage, err.error);
        this.isSignUpFailed = true;
      }
    });
  }
}
