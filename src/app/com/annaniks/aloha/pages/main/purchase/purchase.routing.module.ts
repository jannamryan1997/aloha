import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseView } from './purchase.view';
import { PurchaseGuard } from '../../../core/guards/purchase.guard';
import { SentGuard } from '../../../core/guards/send.guard';

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
                    loadChildren: () => import('./purchase-beehives/purchase-beehives.module').then(m => m.PurchaseBeehivesModule),
                    canActivate:[PurchaseGuard]
                },
                {
                    path: "sent",
                    loadChildren: () => import('./sent/sent.module').then(m => m.SentModule),
                    canActivate:[SentGuard]
                }

            ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(purchaseRoutes)],
    exports: [RouterModule]
})

export class PurchaseRoutingModule { }