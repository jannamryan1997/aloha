import { NgModule } from "@angular/core";
import { MainService } from './main.service';
import { MainRoutingModule } from './main.routing.module';

@NgModule({
    declarations: [],
    imports: [MainRoutingModule],
    providers: [MainService]
})

export class MainModule { }