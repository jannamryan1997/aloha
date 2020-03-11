import { NgModule } from "@angular/core";
import { UserAddressesView } from './user-addresses.view';
import { SharedModule } from '../../../../shared/shared.module';
import { UserAddressesRoutingModule } from './user-addresses.routing.module';
import { AddressListItemComponent } from './components';

@NgModule({
    declarations: [
        UserAddressesView,
        AddressListItemComponent
    ],
    imports: [
        UserAddressesRoutingModule,
        SharedModule
    ],
    providers: []
})

export class UserAddressesModule { }