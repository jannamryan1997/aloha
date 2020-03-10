import { NgModule } from "@angular/core";
import { UserAddressesView } from './user-addresses.view';
import { SharedModule } from '../../../../shared/shared.module';
import { UserAddressesRoutingModule } from './user-addresses.routing.module';

@NgModule({
    declarations: [UserAddressesView],
    imports: [UserAddressesRoutingModule,SharedModule],
    providers: []
})

export class UserAddressesModule { }