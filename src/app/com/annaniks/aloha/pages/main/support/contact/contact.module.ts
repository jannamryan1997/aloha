import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { ContactView } from './contact.view';
import { ContactRoutingModule } from './contact.routing.module';


@NgModule({
    declarations: [ContactView],
    imports: [SharedModule,ContactRoutingModule]
})

export class ContactModule { }