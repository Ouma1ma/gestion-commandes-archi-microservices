import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any=[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8888/PRODUCT-SERVICE/products").subscribe({
      next: (data:any) => { this.products = data; },
      error: (err:any) => { console.log("error happened: ",err); },
      complete: () => { console.log("loaded all the products!"); }
    });
  }


}
