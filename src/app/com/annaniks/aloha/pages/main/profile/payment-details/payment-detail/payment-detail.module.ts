import { NgModule } from '@angular/core';
import { PaymentDetailRouting } from './payment-detail.routing.module';
import { PaymentDetailView } from './payment-detail.view';
import { SharedModule } from '../../../../../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
    declarations: [
        PaymentDetailView
    ],
    imports: [
        PaymentDetailRouting,
        SharedModule,
        MatCheckboxModule,
        MatSelectModule
    ]
})
export class PaymentDetailModule { }