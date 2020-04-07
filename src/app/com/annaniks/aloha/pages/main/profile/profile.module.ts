import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileView } from './profile.view';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileService } from './profile.service';
import { AssetsListService } from './asset-list/asset-list.service';
import { FocusNextInputDriective } from '../../../core/directive/focuse-next.directive';
import { BeehivesComponent } from '../../../layout';

@NgModule({
    declarations: [
        ProfileView,
        FocusNextInputDriective,
        BeehivesComponent
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ],
    providers: [ProfileService,AssetsListService]
})

export class ProfileModule { }