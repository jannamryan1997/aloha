import { NgModule } from "@angular/core";
import { PurchaseView } from './purchase.view';
import { PurchaseRoutingModule } from './purchase.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PurchaseService } from './purchase.service';
import { PurchaseGuard } from '../../../core/guards/purchase.guard';
import { SentGuard } from '../../../core/guards/send.guard';

@NgModule({
    declarations: [PurchaseView],
    imports: [PurchaseRoutingModule,SharedModule],
    providers:[PurchaseService,PurchaseGuard,SentGuard]
})

export class PurchaseModule {

}