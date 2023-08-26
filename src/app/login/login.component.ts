import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading = false;
  
constructor(
  private router: Router,
   private toastr: ToastrService,
   private apiService: ApiService,
   ) { }
  ngOnInit(): void {
     const emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
    this.form = new FormGroup({
      email: new FormControl(null,
        { validators: [Validators.required, Validators.pattern(emailRegEx)] }),
      password: new FormControl(
        null,{ validators: [Validators.required] }
      )
    });
  }
 

  onLogin() {
    console.log("login",this.form)
    if (this.form.invalid) {
      return;
    }
    const user = {
            email: this.form.value.email,
            password: this.form.value.password
    };
    // this.apiService.loginUser(user).subscribe(data => {
    console.log(user)
    window.localStorage.setItem('user', JSON.stringify(user.email));
    // this.toastr.success('login sucessfully!');
    this.router.navigate(['/home']);
    // }, (error) => {
    //   this.toastr.error("registeration failed !!");
    // })
  }


}
