import {NgModule} from "@angular/core";
import { PurchaseBeehivesView } from './purchase-beehives.view';
import { PurchaseBeehivesRoutingModule } from './purchase-beehives.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FocusNextInputDriective } from '../../../../core/directive/focuse-next.directive';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[PurchaseBeehivesView,FocusNextInputDriective],
    imports:[PurchaseBeehivesRoutingModule,ReactiveFormsModule,FormsModule,MatSelectModule,CommonModule]
})
export class PurchaseBeehivesModule{}