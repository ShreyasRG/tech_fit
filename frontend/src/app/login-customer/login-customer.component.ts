import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { FormBuilder, NgForm } from '@angular/forms';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  loginForm = this._formBuilder.group({
    customerEmail: '',
    customerPassword: '',
 });

  customerLogin: Login = new Login();

  constructor(private router: Router, private _formBuilder: FormBuilder, private customerService: CustomersService) { }

  ngOnInit(): void {
  }

  validateCustomer(): any {
    this.customerService.validateCustomer(this.loginForm.value).subscribe((data) => {
       if (data) {
          // this.customerLoggedIn = this.loginForm.value['customerEmail'];
          // this._customersService.setCustomerLoggedIn(this.customerLoggedIn.toString());

          console.log('Customer Exists : reached safely !');
          this.router.navigate(['/home']);
       } else {
          console.log('Customer does not exists !');
          alert('Incorrect Details');
       }
    });
 }

}
