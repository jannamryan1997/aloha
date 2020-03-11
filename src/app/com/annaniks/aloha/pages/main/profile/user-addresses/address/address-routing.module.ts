import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AddressView } from './address.view';

const addressRoutes: Routes = [
    { path: '', component: AddressView }
]

@NgModule({
    imports: [RouterModule.forChild(addressRoutes)],
    exports: [RouterModule]
})
export class AddressRoutingModule { }