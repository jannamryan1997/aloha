import { NgModule } from "@angular/core";
import { PurchaseRequestView } from './purchase-request.view';
import { PurchaseRequestRoutingModule } from './purchase-request.routing.module';

@NgModule({
    declarations: [PurchaseRequestView],
    imports: [PurchaseRequestRoutingModule]
})

export class PurchaseRequestModule {

}