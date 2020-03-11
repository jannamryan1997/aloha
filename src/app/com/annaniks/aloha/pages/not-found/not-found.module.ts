import { NgModule } from "@angular/core";
import { NotFoundRoutingModule } from './not-found.routing.module';
import { NotFoundView } from './not-found.view';

@NgModule({
    declarations: [NotFoundView],
    imports: [NotFoundRoutingModule]
})

export class NotFoundModule { }