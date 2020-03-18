import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TermsView } from './terms.view';

const termsRoutes: Routes = [
    { path: "", component: TermsView }
]
@NgModule({
    imports: [RouterModule.forChild(termsRoutes)],
    exports: [RouterModule]
})
export class TermsRotingModule {

}