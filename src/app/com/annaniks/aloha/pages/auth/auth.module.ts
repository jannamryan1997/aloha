import {NgModule} from "@angular/core";
import { AuthRouteringModule } from './auth.routing.module';
import { AuthView } from './auth.view';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations:[AuthView],
    imports:[AuthRouteringModule,SharedModule]
})

export class AuthModule{}