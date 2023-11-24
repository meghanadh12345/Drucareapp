import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TroubleshootComponent } from './troubleshoot/troubleshoot.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { SignupComponent } from './signup/signup.component';
import { RequestdemoComponent } from './requestdemo/requestdemo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'troubleshoot',component:TroubleshootComponent}, 
  {path:'createaccount',component:CreateaccountComponent},
  {path:'requestdemo',component:RequestdemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
  
}
