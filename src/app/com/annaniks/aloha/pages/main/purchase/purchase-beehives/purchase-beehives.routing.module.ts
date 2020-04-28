import {NgModule} from "@angular/core"; 
import {RouterModule,Routes} from "@angular/router";
import { PurchaseBeehivesView } from './purchase-beehives.view';

const purchaseBeehivesRoutes:Routes=[
    {path:"",component:PurchaseBeehivesView}
]
@NgModule({
    imports:[RouterModule.forChild(purchaseBeehivesRoutes)],
   exports:[]
})

export class PurchaseBeehivesRoutingModule{}
