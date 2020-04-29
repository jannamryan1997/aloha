import { NgModule } from "@angular/core";
import { RegistrationView } from './registration.view';
import { RegistrationRoutingModule } from './registration.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import {Ng2TelInputModule} from 'ng2-tel-input';
@NgModule({
    declarations: [RegistrationView],
    imports: [RegistrationRoutingModule,SharedModule,Ng2TelInputModule]
})

export class RegistrationModule { }