import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent, FooterComponent } from '../layout';
import { OnlyNumberDirective } from '../core/directive';


@NgModule({
    declarations: [LoadingComponent,OnlyNumberDirective,FooterComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
  
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        LoadingComponent,
        OnlyNumberDirective,
        FooterComponent 
    ],
    providers: [],
    entryComponents: []
})

export class SharedModule { }
