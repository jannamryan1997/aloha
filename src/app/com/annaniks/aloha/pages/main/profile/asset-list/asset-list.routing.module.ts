import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssetListComponent } from './asset-list.view';


const assetListRoutes: Routes = [
    { path: "", component: AssetListComponent }
];
@NgModule({
    imports: [RouterModule.forChild(assetListRoutes)],
    exports: [RouterModule]
})

export class AssetListRoutingModule { }