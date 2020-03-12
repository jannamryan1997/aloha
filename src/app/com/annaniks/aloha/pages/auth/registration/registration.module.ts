import { NgModule } from "@angular/core";
import { RegistrationView } from './registration.view';
import { RegistrationRoutingModule } from './registration.routing.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [RegistrationView],
    imports: [RegistrationRoutingModule,SharedModule]
})

export class RegistrationModule { }