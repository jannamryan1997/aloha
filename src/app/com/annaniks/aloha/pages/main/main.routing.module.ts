import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from './main.view';

const mainRoutes: Routes = [
    {
        path: "", component: MainView, children: [
            { path: "", redirectTo: "purchase", pathMatch: "full" },
            {
                path: "purchase",
                loadChildren: () => import('./purchase/purchase.module').then(m => m.PurchaseModule),
            },
            {
                path: "profile",
                loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
            },
            {
                path: "support",
                loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
            }


        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}