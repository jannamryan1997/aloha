import { NgModule } from '@angular/core';
import { AddressRoutingModule } from './address-routing.module';
import { AddressView } from './address.view';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
    declarations: [AddressView],
    imports: [AddressRoutingModule, SharedModule]
})
export class AddressModule { }