import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentView } from './paymet.view';
import { PaymentRoutingModule } from './payment.routing.module';
import { PayBillView } from '../../../../core/modals';
import { PaymentListItemComponent } from './component/payment-list-item/payment-list-item.component';
import { PaymentService } from './payment.service';
import { PurchaseService } from '../../purchase/purchase.service';

@NgModule({
    declarations: [PaymentView,PayBillView,PaymentListItemComponent],
    imports: [PaymentRoutingModule, SharedModule],
    providers: [PaymentService,PurchaseService],
    entryComponents:[PayBillView]
})

export class PaymentModule { }