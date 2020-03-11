import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule
    ],
    providers: [],
    entryComponents: []
})

export class SharedModule { }
