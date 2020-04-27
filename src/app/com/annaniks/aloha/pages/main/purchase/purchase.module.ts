import { NgModule } from "@angular/core";
import { PurchaseView } from './purchase.view';
import { PurchaseRoutingModule } from './purchase.routing.module';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
    declarations: [PurchaseView],
    imports: [PurchaseRoutingModule,SharedModule]
})

export class PurchaseModule {

}