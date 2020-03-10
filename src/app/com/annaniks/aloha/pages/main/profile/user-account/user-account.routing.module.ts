import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserAccountView } from './user-account.view';

const userAccountRoutes: Routes = [
    { path: "", component: UserAccountView }
];
@NgModule({
    imports: [RouterModule.forChild(userAccountRoutes)],
    exports: [RouterModule]
})

export class UserAccountRoutingModule { }