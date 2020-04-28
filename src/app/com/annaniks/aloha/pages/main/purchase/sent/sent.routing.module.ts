import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SentView } from './sent.view';

const sentRoutes: Routes = [
    { path: "", component: SentView }
]

@NgModule({
    imports: [RouterModule.forChild(sentRoutes)],
    exports: [RouterModule]
})

export class SentRoutingModule { }