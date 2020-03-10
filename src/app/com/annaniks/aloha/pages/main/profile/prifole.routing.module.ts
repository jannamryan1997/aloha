import { NgModule } from "@angular/core";
import {RouterModule,Routes} from "@angular/router";

const profileRoutes:Routes=[];
@NgModule({ 
    imports: [RouterModule.forChild(profileRoutes)],
    exports:[RouterModule]
})

export class ProfileRoutingModule { }