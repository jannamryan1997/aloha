import {NgModule} from "@angular/core";
import { AuthRouteringModule } from './auth.routing.module';
import { AuthView } from './auth.view';

@NgModule({
    declarations:[AuthView],
    imports:[AuthRouteringModule]
})

export class AuthModule{}