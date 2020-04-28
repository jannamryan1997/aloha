import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileView } from './profile.view';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileService } from './profile.service';

import { BeehivesComponent } from '../../../layout';
import { InventoryService } from './inventory/inventory.service';

@NgModule({
    declarations: [
        ProfileView,
        BeehivesComponent
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ],
    providers: [ProfileService,InventoryService]
})

export class ProfileModule { }