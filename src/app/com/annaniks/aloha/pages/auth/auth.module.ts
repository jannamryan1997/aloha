import {NgModule} from "@angular/core";
import { AuthRouteringModule } from './auth.routing.module';
import { AuthView } from './auth.view';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from './auth.service';

@NgModule({
    declarations:[AuthView],
    imports:[AuthRouteringModule,SharedModule],
    providers:[AuthService]
})

export class AuthModule{}