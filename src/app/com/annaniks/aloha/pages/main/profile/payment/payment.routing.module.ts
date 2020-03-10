import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentView } from './paymet.view';

const paymentRoutes: Routes = [
    { path: "", component: PaymentView }
];
@NgModule({
    imports: [RouterModule.forChild(paymentRoutes)],
    exports: [RouterModule]
})

export class PaymentRoutingModule { }