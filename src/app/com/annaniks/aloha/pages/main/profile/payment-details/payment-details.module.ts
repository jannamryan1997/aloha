import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentDetailsView } from './payment-details.view';
import { PaymentDetailsRoutingModule } from './payment-details.routing.module';
import { PaymentListItemComponent } from './components';
@NgModule({
    declarations: [
        PaymentDetailsView,
        PaymentListItemComponent
    ],
    imports: [
        PaymentDetailsRoutingModule,
        SharedModule,
    ],
    providers: []
})

export class PaymentDetailsModule { }