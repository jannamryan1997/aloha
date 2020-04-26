import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileView } from './profile.view';

const profileRoutes: Routes = [
    {
        path: "", component: ProfileView, children: [
            { path: "", redirectTo: "user-account", pathMatch: "full" },
            { path: "user-account", data: { title: 'Profile' }, loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule) },
            { path: "user-addresses", data: { title: 'Addresses' }, loadChildren: () => import('./user-addresses/user-addresses.module').then(m => m.UserAddressesModule) },
            { path: "payment-details", data: { title: 'Payment details' }, loadChildren: () => import('./payment-details/payment-details.module').then(m => m.PaymentDetailsModule) },
            { path: "inventory", data: { title: 'Inventory' }, loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule) },
            { path: "payments", data: { title: 'Payments' }, loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) }
        ]
    },

];
@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }