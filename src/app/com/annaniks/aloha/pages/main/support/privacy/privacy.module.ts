import { NgModule } from "@angular/core";
import { PrivacyView } from './privacy.view';
import { PrivacyRoutingModule } from './privacy.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { SupportService } from '../support.service';

@NgModule({
    declarations: [PrivacyView],
    imports: [PrivacyRoutingModule,ReactiveFormsModule,FormsModule,SharedModule],
    providers:[SupportService]
})

export class PrivacyModule {

}