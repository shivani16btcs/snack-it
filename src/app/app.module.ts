import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaglineComponent } from 'src/tagline/tagline.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { FindMySnackDetailComponent } from './home/find-my-snack-detail/find-my-snack-detail.component';
import { SuggestMySnackComponent } from './home/suggest-my-snack/suggest-my-snack.component';
import { TakeInputComponent } from './home/find-my-snack-detail/take-input/take-input.component';
import { ApiService } from './shared/services/api.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaglineComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    HomeComponent,
    FindMySnackDetailComponent,
    SuggestMySnackComponent,
    TakeInputComponent,
    // LoginComponent,
    // RegisterComponent,
    // ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({}),
    ToastContainerModule 
  ],
  providers: [
  ApiService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
