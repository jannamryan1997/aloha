import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";

const notFoundRoutes:Routes=[];
@NgModule({ 
    imports: [RouterModule.forChild(notFoundRoutes)],
    exports:[RouterModule]
})

export class NotFoundRoutingModule { }