import { NgModule } from "@angular/core";
import { UserAccountView } from './user-account.view';
import { UserAccountRoutingModule } from './user-account.routing.module';
import { SharedModule } from '../../../../shared/shared.module';
@NgModule({
    declarations: [UserAccountView],
    imports: [
        UserAccountRoutingModule,
        SharedModule
    ],
    providers: []
})

export class UserAccountModule { }