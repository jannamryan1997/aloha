import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentView } from './paymet.view';
import { PaymentRoutingModule } from './payment.routing.module';
import { PayBillView } from '../../../../core/modals';
import { PaymentListItemComponent } from './component/payment-list-item/payment-list-item.component';

@NgModule({
    declarations: [PaymentView,PayBillView,PaymentListItemComponent],
    imports: [PaymentRoutingModule, SharedModule],
    providers: [],
    entryComponents:[PayBillView]
})

export class PaymentModule { }