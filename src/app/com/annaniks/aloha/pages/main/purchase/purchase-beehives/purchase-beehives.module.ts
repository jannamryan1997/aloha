import {NgModule} from "@angular/core";
import { PurchaseBeehivesView } from './purchase-beehives.view';
import { PurchaseBeehivesRoutingModule } from './purchase-beehives.routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
@NgModule({
    declarations:[PurchaseBeehivesView],
    imports:[PurchaseBeehivesRoutingModule,ReactiveFormsModule,FormsModule,MatSelectModule,CommonModule,SharedModule]
})
export class PurchaseBeehivesModule{}