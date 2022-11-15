import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginCustomerUrl: string = 'http://localhost:8080/customers/login';

  constructor(private _httpClient: HttpClient) { }


}
