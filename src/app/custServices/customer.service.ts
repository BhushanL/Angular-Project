import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icustomer } from '../model/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url: string = "assets/customer.json";

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Icustomer[]> {
    return this.httpClient.get<Icustomer[]>(this.url)
  }
}
