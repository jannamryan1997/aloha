import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InventoryComponent } from './inventory.view';


const inventory: Routes = [
    { path: "", component: InventoryComponent }
];
@NgModule({
    imports: [RouterModule.forChild(inventory)],
    exports: [RouterModule]
})

export class InventoryRoutingModule { }