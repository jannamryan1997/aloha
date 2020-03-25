import { NgModule } from '@angular/core';
import { AddressRoutingModule } from './address-routing.module';
import { AddressView } from './address.view';
import { SharedModule } from '../../../../../shared/shared.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
@NgModule({
    declarations: [AddressView],
    imports: [AddressRoutingModule, SharedModule,MatCheckboxModule,AutocompleteLibModule]
})
export class AddressModule { }