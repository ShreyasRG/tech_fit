import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private registerCustomerUrl: string = 'http://localhost:8081/customers/addCustomer';
  private loginCustomerUrl: string = 'http://localhost:8081/customers/login';

  constructor(private _httpClient: HttpClient) { }

  registerCustomer(customers: Customers): Observable<Object> {
    return this._httpClient.post(`${this.registerCustomerUrl}` , customers)
  }

  validateCustomer(value: any) {
    return this._httpClient.post<Customers>(this.loginCustomerUrl, value);
 }
}
