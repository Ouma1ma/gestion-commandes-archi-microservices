import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any=[];

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8888/CUSTOMER-SERVICE/customers").subscribe({
      next: (data:any) => { this.customers = data; },
      error: (err:any) => { console.log("error happened: ",err); },
      complete: () => { console.log("loaded all the customers!"); }
    });
  }

  getBills(c:any) {

  }
}
