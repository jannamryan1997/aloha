import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { InventoryComponent } from './inventory.view';
import { InventoryRoutingModule } from './inventory.routing.module';
import { InventoryItemComponent } from './components';
import { InventoryService } from './inventory.service';
import { MessageModal, SellOutModal } from '../../../../core/modals';

@NgModule({
    declarations: [
        InventoryComponent,
        InventoryItemComponent,
        MessageModal,
        SellOutModal

    ],
    imports: [
        InventoryRoutingModule,
        SharedModule
    ],
    providers: [InventoryService],
    entryComponents:[MessageModal,SellOutModal]
})

export class InventoryModule { }