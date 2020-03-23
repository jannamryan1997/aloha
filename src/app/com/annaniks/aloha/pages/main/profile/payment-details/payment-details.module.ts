import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentDetailsView } from './payment-details.view';
import { PaymentDetailsRoutingModule } from './payment-details.routing.module';
import { PaymentListItemComponent } from './components';
import { PaymentDetailsService } from './payment-details.service';
@NgModule({
    declarations: [
        PaymentDetailsView,
        PaymentListItemComponent
    ],
    imports: [
        PaymentDetailsRoutingModule,
        SharedModule,
    ],
    providers: [PaymentDetailsService]
})

export class PaymentDetailsModule { }