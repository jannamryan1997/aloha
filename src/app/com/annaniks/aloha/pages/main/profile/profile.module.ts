import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileView } from './profile.view';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { LoadingComponent } from '../../../layout';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [
        ProfileView,
        FooterComponent,
        LoadingComponent,
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ],
    providers: []
})

export class ProfileModule { }