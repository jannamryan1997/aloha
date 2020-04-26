import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrivacyView } from './privacy.view';

const privacyRoutes: Routes = [{
    path: "", component: PrivacyView
}]
@NgModule({
    imports:[RouterModule.forChild(privacyRoutes)],
    exports:[RouterModule]
})
export class PrivacyRoutingModule { }