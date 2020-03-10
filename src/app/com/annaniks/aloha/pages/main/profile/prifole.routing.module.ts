import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfileView } from './profile.view';

const profileRoutes: Routes = [
    {
        path: "", component: ProfileView, children: [
            { path: "", redirectTo: "user-account", pathMatch: "full" },
            { path: "user-account", loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule) },
            { path: "user-addresses", loadChildren: () => import('./user-addresses/user-addresses.module').then(m => m.UserAddressesModule) },
            { path: "payment-details", loadChildren: () => import('./payment-details/payment-details.module').then(m => m.PaymentDetailsModule) }
        ]
    },

];
@NgModule({
    imports: [RouterModule.forChild(profileRoutes)],
    exports: [RouterModule]
})

export class ProfileRoutingModule { }