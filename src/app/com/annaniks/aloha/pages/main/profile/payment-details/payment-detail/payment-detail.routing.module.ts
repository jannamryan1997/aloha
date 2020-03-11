import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentDetailView } from './payment-detail.view';

const paymentDetail: Routes = [
    { path: '', component: PaymentDetailView }
]

@NgModule({
    imports: [RouterModule.forChild(paymentDetail)],
    exports: [RouterModule]
})
export class PaymentDetailRouting { }