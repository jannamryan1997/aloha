import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileView } from './profile.view';
import { SharedModule } from '../../../shared/shared.module';
import { ProfileService } from './profile.service';

@NgModule({
    declarations: [
        ProfileView,
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ],
    providers: [ProfileService]
})

export class ProfileModule { }