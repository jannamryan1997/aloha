import { NgModule } from "@angular/core";
import { UserAccountView } from './user-account.view';
import { UserAccountRoutingModule } from './user-account.routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
@NgModule({
    declarations: [UserAccountView],
    imports: [UserAccountRoutingModule,SharedModule,AutocompleteLibModule],
    providers: []
})

export class UserAccountModule { }