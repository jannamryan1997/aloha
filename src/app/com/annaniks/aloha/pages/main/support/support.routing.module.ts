import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SupportView } from './support.view';

const supportRoutes: Routes = [
    {
        path: "", component: SupportView, children: [
            { path: "", redirectTo: "terms", pathMatch: "full" },
            // { path: "privacy", data: { title: 'Privacy' }, loadChildren: () => import('./privacy/privacy.module').then(m => m.PrivacyModule) },
            { path: "terms", data: { title: 'Terms' }, loadChildren: () => import('./terms/terms.module').then(m => m.TermsModule) },
            // { path: "credit", data: { title: "Credit Cards" }, loadChildren: () => import('./limit/limit.module').then(m => m.LimitModule) },
            { path: "contact", data: { title: "Contact" }, loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(supportRoutes)],
    exports: [RouterModule]
})

export class SupportRoutesModule {

}