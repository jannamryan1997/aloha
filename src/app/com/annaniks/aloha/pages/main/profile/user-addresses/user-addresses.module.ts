import { NgModule } from "@angular/core";
import { UserAddressesView } from './user-addresses.view';
import { SharedModule } from '../../../../shared/shared.module';
import { UserAddressesRoutingModule } from './user-addresses.routing.module';
import { AddressListItemComponent } from './components';
import { UserAddressesService } from './user-addresses.service';

@NgModule({
    declarations: [
        UserAddressesView,
        AddressListItemComponent
    ],
    imports: [
        UserAddressesRoutingModule,
        SharedModule
    ],
    providers: [UserAddressesService]
})

export class UserAddressesModule { }