import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent, FooterComponent } from '../layout';
import { OnlyNumberDirective } from '../core/directive';
import { RequestModal, SuccessfullyModal } from '../core/modals';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MaxLength } from '../core/pipe';
import { FocusNextInputDriective } from '../core/directive/focuse-next.directive';



@NgModule({
    declarations: [
        LoadingComponent,
        OnlyNumberDirective,
        FooterComponent,
        RequestModal,
        MaxLength,
        FocusNextInputDriective,
        SuccessfullyModal
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        AutocompleteLibModule,

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
        AutocompleteLibModule,
        MaxLength,
        FocusNextInputDriective

    ],
    providers: [],
    entryComponents: [RequestModal,SuccessfullyModal]
})

export class SharedModule { }
