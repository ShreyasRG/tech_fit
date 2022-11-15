import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
  
  customers: Customers = new Customers();
  constructor(private customerRegister: CustomersService,
    private router: Router) {}

  ngOnInit(): void {}

  registerCustomer(){
    this.customerRegister.registerCustomer(this.customers).subscribe(data => {
      if(data) {
        alert('Registration Successful !!');
      }else {
        alert('Customer is already Registered !')
      }
     console.log(data);
     this.goToLogin(); 
    },
    error => console.log(error))
  }

  goToLogin(){
    this.router.navigate(['/login-customer']);
  }

  onSubmit(){
    console.log(this.customers)
    this.registerCustomer();
  }

}
