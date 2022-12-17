import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit{

  billDetail:any = {}
  id!:any;

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute){
    this.id = activatedRoute.snapshot.params['billd'];
  }


  ngOnInit(): void {
    this.httpClient.get("http://localhost:8888/BILLING-SERVICE/bills/search/byId?projection=fullBill&id="+this.id).subscribe({
      next: (data:any) => { this.billDetail = data; },
      error: (err:any) => { console.log("error happened: ",err); },
      complete: () => { console.log("got the bill!"); }
    });
  }
}
