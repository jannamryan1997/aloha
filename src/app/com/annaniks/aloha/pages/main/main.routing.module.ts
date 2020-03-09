import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainView } from './main.view';

const mainRoutes: Routes = [
    {
        path: "", component: MainView, children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            {
                path: "home",
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})

export class MainRoutingModule {

}