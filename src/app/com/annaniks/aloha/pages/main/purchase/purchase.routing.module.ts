import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseView } from './purchase.view';

const purchaseRoutes: Routes = [
    {
        path: "", component: PurchaseView, children:
            [
                { path: "", redirectTo: "request", pathMatch: "full" },
                {
                    path: "request",
                    loadChildren: () => import('./purchase-request/purchase-request.module').then(m => m.PurchaseRequestModule),
                },
                {
                    path: "purchaseBeehives",
                    loadChildren: () => import('./purchase-beehives/purchase-beehives.module').then(m => m.PurchaseBeehivesModule)
                },
                {
                    path: "sent",
                    loadChildren: () => import('./sent/sent.module').then(m => m.SentModule)
                }

            ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(purchaseRoutes)],
    exports: [RouterModule]
})

export class PurchaseRoutingModule { }