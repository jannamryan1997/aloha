import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent, FooterComponent } from '../layout';
import { OnlyNumberDirective } from '../core/directive';
import { RequestModal } from '../core/modals';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
    declarations: [LoadingComponent, OnlyNumberDirective, FooterComponent, RequestModal],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        AutocompleteLibModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        LoadingComponent,
        OnlyNumberDirective,
        FooterComponent,
        RequestModal,
        AutocompleteLibModule
    ],
    providers: [],
    entryComponents: [RequestModal]
})

export class SharedModule { }
