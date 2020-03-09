import { NgModule } from "@angular/core";
import { HomeRoutingModule } from './home.routing.module';
import { HomeView } from './home.view';

@NgModule({
    declarations: [HomeView],
    imports: [HomeRoutingModule],
    providers: []
})

export class HomeModule { }