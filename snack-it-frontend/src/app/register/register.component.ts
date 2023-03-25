import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ApiService } from '../shared/services/api.service';
import { Register } from '../shared/models/registerAuth.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  confirmPasswordError = false;
  password = 'Enter your password';
  confirmPassword = 'Re-Enter your password';
  submitButton = 'Register';

  constructor( 
               private router: Router,
               private apiService: ApiService,
               private toastr: ToastrService
             ) { }

  ngOnInit(): void {
    const emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.form = new FormGroup({
      password: new FormControl(
        null,
        { validators: [Validators.required] }
      ),
      confirmPassword: new FormControl(
        null,
        { validators: [Validators.required] }
      ),
      email: new FormControl(
        null,
        { validators: [Validators.required, Validators.pattern(emailRegEx)] }
      ),
      firstName: new FormControl(
        null,
        { validators: [Validators.required] }
      ),
      secondName: new FormControl( '' )
    });

  }

  onRegister() {
    this.checkPassword();
    if ( this.form.invalid ) {
      return;
    } else {
      const user: Register = {
        username: this.form.value.firstName +' '+ this.form.value.secondName,
        password: this.form.value.password,
        email: this.form.value.email
      };
      // this.apiService.registerUser(user).subscribe(data => {
        console.log(user)
        this.router.navigate(['/login']);
        this.toastr.success('registered sucessfully');
      // }, (error) => {
      //   this.toastr.error("registeration failed !!");
      // })
    }
  }

  checkPassword() {
    if ( this.form.value.password && this.form.value.confirmPassword ) {
      const password = this.form.value.password;
      const confPassword = this.form.value.confirmPassword;
      if (!( password === confPassword )) {
        this.form.patchValue({confirmPassword: null});
        this.confirmPasswordError = true;
      } else {
        this.confirmPasswordError = false;
      }
    }

  }

}