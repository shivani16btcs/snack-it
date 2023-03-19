import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import{HomeComponent} from './home/home.component'
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forget',component:ForgotComponent},
  // {path:'reset/:token',component:ResetComponent},
  {path:'home',component:HomeComponent},

  {path:'ecoupons',component:HomeComponent},
  {path:'ebrands',component:HomeComponent},
  {path:'reusemarket',component:HomeComponent},
  {path:'lostandfound',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginComponent,RegisterComponent]


