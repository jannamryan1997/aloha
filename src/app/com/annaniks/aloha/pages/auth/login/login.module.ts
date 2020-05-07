import { NgModule } from "@angular/core";
import { LoginRoutingModule } from './login.routing.module';
import { LoginView } from './login.view';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [LoginView],
    imports: [LoginRoutingModule, SharedModule]
})

export class LoginModule { }