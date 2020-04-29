import { NgModule } from "@angular/core";
import { LimitView } from './limit.view';
import { SharedModule } from '../../../../shared/shared.module';
import { LimitRoutingModule } from './limit.routing.module';

@NgModule({
    declarations: [LimitView],
    imports: [SharedModule,LimitRoutingModule]
})

export class LimitModule { }