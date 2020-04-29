import { NgModule } from "@angular/core";
import { LimitView } from './limit.view';
import { RouterModule, Routes } from '@angular/router';

const limitRoutes: Routes = [
    { path: "", component: LimitView }
]

@NgModule({

    imports: [RouterModule.forChild(limitRoutes)],
    exports: [RouterModule]
})

export class LimitRoutingModule { }