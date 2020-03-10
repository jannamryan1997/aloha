import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentView } from './paymet.view';
import { PaymentRoutingModule } from './payment.routing.module';
import { PayBillView } from '../../../../core/modals';

@NgModule({
    declarations: [PaymentView,PayBillView],
    imports: [PaymentRoutingModule, SharedModule],
    providers: [],
    entryComponents:[PayBillView]
})

export class PaymentModule { }