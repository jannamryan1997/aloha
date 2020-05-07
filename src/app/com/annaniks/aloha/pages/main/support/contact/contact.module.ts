import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { ContactView } from './contact.view';
import { ContactRoutingModule } from './contact.routing.module';
import { SupportMessageModal } from '../../../../core/modals';


@NgModule({
    declarations: [ContactView,SupportMessageModal],
    imports: [SharedModule,ContactRoutingModule],
    entryComponents:[SupportMessageModal]
})

export class ContactModule { }