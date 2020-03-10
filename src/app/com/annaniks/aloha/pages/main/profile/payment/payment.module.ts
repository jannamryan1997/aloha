import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { PaymentView } from './paymet.view';
import { PaymentRoutingModule } from './payment.routing.module';

@NgModule({
    declarations: [PaymentView],
    imports: [PaymentRoutingModule, SharedModule],
    providers: []
})

export class PaymentModule { }