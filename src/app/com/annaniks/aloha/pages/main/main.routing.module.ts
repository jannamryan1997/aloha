import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const mainRoutes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}