import { NgModule } from "@angular/core";
import { SupportView } from './support.view';
import { SharedModule } from '../../../shared/shared.module';
import { SupportRoutesModule } from './support.routing.module';
import { SupportMessageModal } from '../../../core/modals';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SupportService } from './support.service';


@NgModule({
    declarations: [SupportView,SupportMessageModal],
    imports: [SupportRoutesModule,SharedModule,CommonModule,ReactiveFormsModule,FormsModule],
    entryComponents:[SupportMessageModal],
    providers:[SupportService]
})
export class SupportModule {
}