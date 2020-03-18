import { NgModule } from "@angular/core";
import { TermsView } from './terms.view';
import { TermsRotingModule } from './terms.routing.module';

@NgModule({
    declarations: [TermsView],
    imports: [TermsRotingModule]
})
export class TermsModule {

}