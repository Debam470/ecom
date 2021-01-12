import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './customer/signin/signin.component';
import { CreateaccountComponent } from './customer/createaccount/createaccount.component';


const routes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signin/createaccount', component: CreateaccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
