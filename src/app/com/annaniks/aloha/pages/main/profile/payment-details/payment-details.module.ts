import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentDetailsView } from './payment-details.view';
import { PaymentDetailsRoutingModule } from './payment-details.routing.module';

@NgModule({
    declarations: [PaymentDetailsView],
    imports: [PaymentDetailsRoutingModule,SharedModule],
    providers: []
})

export class PaymentDetailsModule { }