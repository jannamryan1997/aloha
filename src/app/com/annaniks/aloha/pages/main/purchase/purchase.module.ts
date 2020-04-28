import { NgModule } from "@angular/core";
import { PurchaseView } from './purchase.view';
import { PurchaseRoutingModule } from './purchase.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PurchaseService } from './purchase.service';


@NgModule({
    declarations: [PurchaseView],
    imports: [PurchaseRoutingModule,SharedModule],
    providers:[PurchaseService]
})

export class PurchaseModule {

}