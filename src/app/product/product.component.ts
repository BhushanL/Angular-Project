import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productServices/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  //public searchText: string ='';

  namesearch: string = "";

  products: any = [];
  empErrorMsg = '';
 
  SortDirection: any;
  SortbyParam: any;
  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      success => this.products = success,
      error => this.empErrorMsg = error
    )
  }

}
