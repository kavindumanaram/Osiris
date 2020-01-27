import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { OrdersComponent } from "./orders/orders.component";
import { OrderComponent } from "./orders/order/order.component";

const routes: Routes = [
  { path: "", redirectTo: "order", pathMatch: "full" }, //default path
  { path: "orders", component: OrdersComponent },
  {
    path: "order",
    children: [
      { path: "", component: OrderComponent },
      { path: "edit/:id", component: OrderComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class AppRoutingModule {}
