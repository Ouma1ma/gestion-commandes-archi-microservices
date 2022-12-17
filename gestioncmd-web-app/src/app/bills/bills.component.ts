import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  bills: any = [];

  constructor(private httpClient: HttpClient,
              private router: Router) {}

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8888/BILLING-SERVICE/bills").subscribe({
      next: (data:any) => { this.bills = data; },
      error: (err:any) => { console.log("error happened: ",err); },
      complete: () => { console.log("loaded all the bills!"); }
    });
  }

  getBill(bill: any) {
    this.router.navigateByUrl("/bill-details/"+bill.id);
  }
}
