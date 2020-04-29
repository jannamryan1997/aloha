import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContactView } from './contact.view';

const contactRoutes: Routes = [
    { path: "", component: ContactView }
]

@NgModule({

    imports: [RouterModule.forChild(contactRoutes)],
    exports: [RouterModule]
})

export class ContactRoutingModule { }