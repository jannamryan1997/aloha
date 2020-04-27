import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PurchaseRequestView } from './purchase-request.view';

const purchaseRoutes: Routes = [
    { path: "", component: PurchaseRequestView }
]
@NgModule({
    imports: [RouterModule.forChild(purchaseRoutes)],
    exports: [RouterModule]
})

export class PurchaseRequestRoutingModule { }