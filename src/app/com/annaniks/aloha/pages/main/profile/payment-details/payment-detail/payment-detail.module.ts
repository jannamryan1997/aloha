import { NgModule } from '@angular/core';
import { PaymentDetailRouting } from './payment-detail.routing.module';
import { PaymentDetailView } from './payment-detail.view';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
    declarations: [
        PaymentDetailView
    ],
    imports: [
        PaymentDetailRouting,
        SharedModule
    ]
})
export class PaymentDetailModule { }