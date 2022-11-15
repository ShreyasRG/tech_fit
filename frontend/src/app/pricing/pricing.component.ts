import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/login-customer']);
  }
}
