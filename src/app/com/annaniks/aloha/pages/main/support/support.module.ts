import { NgModule } from "@angular/core";
import { SupportView } from './support.view';
import { SharedModule } from '../../../shared/shared.module';
import { SupportRoutesModule } from './support.routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SupportService } from './support.service';


@NgModule({
    declarations: [SupportView],
    imports: [SupportRoutesModule,SharedModule,CommonModule,ReactiveFormsModule,FormsModule],
    entryComponents:[],
    providers:[SupportService]
})
export class SupportModule {
}