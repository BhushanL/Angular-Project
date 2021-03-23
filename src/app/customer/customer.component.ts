import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../custServices/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  namesearch: string = "";

  products: any = [];
  empErrorMsg = '';

  SortDirection: any;
  SortbyParam: any;
  constructor(private productService: CustomerService) { }



  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      success => this.products = success,
      error => this.empErrorMsg = error
    )
  }

}
