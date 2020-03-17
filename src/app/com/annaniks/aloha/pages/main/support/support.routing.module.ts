import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupportView } from './support.view';

const supportRoutes: Routes = [
    {
        path: "", component: SupportView, children: [
            { path: "", redirectTo: "terms", pathMatch: "full" },
            { path: "terms", data: { title: 'Terms' },loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule) }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(supportRoutes)],
    exports: [RouterModule]
})

export class SupportRoutesModule {

}