import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentDetailsView } from './payment-details.view';

const paymentDetailsRoutes: Routes = [
    { path: "", component: PaymentDetailsView }
];
@NgModule({
    imports: [RouterModule.forChild(paymentDetailsRoutes)],
    exports: [RouterModule]
})

export class PaymentDetailsRoutingModule { }