import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { BillsComponent } from './bills/bills.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"products", component:ProductsComponent
  },
  {
    path:"customers", component:CustomersComponent
  },
  {
    path:"bills", component:BillsComponent
  },
  {
    path:"bill-details/:billd",component:BillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
