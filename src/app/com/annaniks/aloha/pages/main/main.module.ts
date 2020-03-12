import { NgModule } from "@angular/core";
import { MainService } from './main.service';
import { MainRoutingModule } from './main.routing.module';
import { MainView } from './main.view';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../../layout';

@NgModule({
    declarations: [MainView, HeaderComponent],
    imports: [MainRoutingModule, SharedModule],
    providers: [MainService]
})

export class MainModule { }