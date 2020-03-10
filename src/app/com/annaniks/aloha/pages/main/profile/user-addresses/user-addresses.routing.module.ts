import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserAddressesView } from './user-addresses.view';

const userAddressesRoutes: Routes = [
    { path: "", component: UserAddressesView }
];
@NgModule({
    imports: [RouterModule.forChild(userAddressesRoutes)],
    exports: [RouterModule]
})

export class UserAddressesRoutingModule { }