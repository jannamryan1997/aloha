import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";

const homeRoutes:Routes=[];
@NgModule({ 
    imports: [RouterModule.forChild(homeRoutes)],
    exports:[RouterModule]
})

export class HomeRoutingModule { }