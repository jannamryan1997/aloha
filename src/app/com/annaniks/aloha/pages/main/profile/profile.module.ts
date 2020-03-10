import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from './prifole.routing.module';
import { ProfileView } from './profile.view';


@NgModule({
    declarations: [ProfileView],
    imports: [ProfileRoutingModule],
    providers: []
})

export class ProfileModule { }