import { NgModule } from "@angular/core";
import { UserAccountView } from './user-account.view';
import { UserAccountRoutingModule } from './user-account.routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    declarations: [UserAccountView],
    imports: [
        UserAccountRoutingModule,
        Ng2TelInputModule,
        SharedModule,
        NgxMaskModule.forRoot({})
    ],
    providers: []
})

export class UserAccountModule { }