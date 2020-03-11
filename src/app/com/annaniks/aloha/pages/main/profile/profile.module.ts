import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileView } from './profile.view';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { LoadingComponent } from '../../../layout';

@NgModule({
    declarations: [
        ProfileView,
        FooterComponent,
        LoadingComponent
    ],
    imports: [
        ProfileRoutingModule
    ],
    providers: []
})

export class ProfileModule { }