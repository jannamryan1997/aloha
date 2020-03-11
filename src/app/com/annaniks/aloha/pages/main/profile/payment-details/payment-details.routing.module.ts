import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentDetailsView } from './payment-details.view';

const paymentDetailsRoutes: Routes = [
    { path: "", component: PaymentDetailsView },
    { path: 'add', loadChildren: () => import('./payment-detail/payment-detail.module').then(m => m.PaymentDetailModule) },
    { path: ':id', loadChildren: () => import('./payment-detail/payment-detail.module').then(m => m.PaymentDetailModule) }
];
@NgModule({
    imports: [RouterModule.forChild(paymentDetailsRoutes)],
    exports: [RouterModule]
})

export class PaymentDetailsRoutingModule { }