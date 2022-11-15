import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { TrainersComponent } from './trainers/trainers.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path: 'login-customer', component: LoginCustomerComponent},
  {path: 'register-customer', component: RegisterCustomerComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'features' , component: FeaturesComponent},
  {path: 'trainers' , component: TrainersComponent},
  {path: 'pricing' , component: PricingComponent},
  {path: 'blogs' , component: BlogsComponent},
  { path: '', redirectTo: 'login-customer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
