import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserAddressesView } from './user-addresses.view';

const userAddressesRoutes: Routes = [
    { path: "", component: UserAddressesView },
    { path: "add", loadChildren: () => import('./address/address.module').then(m => m.AddressModule) },
    { path: ":id", loadChildren: () => import('./address/address.module').then(m => m.AddressModule) }
];
@NgModule({
    imports: [RouterModule.forChild(userAddressesRoutes)],
    exports: [RouterModule]
})

export class UserAddressesRoutingModule { }
