import { NgModule } from "@angular/core";
import { UserAddressesView } from './user-addresses.view';
import { SharedModule } from '../../../../shared/shared.module';
import { UserAddressesRoutingModule } from './user-addresses.routing.module';
import { AddressListItemComponent } from './components';
import { UserAddressesService } from './user-addresses.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
    declarations: [
        UserAddressesView,
        AddressListItemComponent
    ],
    imports: [
        UserAddressesRoutingModule,
        MatCheckboxModule,
        SharedModule
    ],
    providers: [UserAddressesService]
})

export class UserAddressesModule { }