import { NgModule } from "@angular/core";
import { SupportView } from './support.view';
import { SharedModule } from '../../../shared/shared.module';
import { SupportRoutesModule } from './support.routing.module';
@NgModule({
    declarations: [SupportView],
    imports: [SupportRoutesModule,SharedModule]
})
export class SupportModule {
}