import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-successfully",
    templateUrl: "successfully.modal.html",
    styleUrls: ["successfully.modal.scss"]
})

export class SuccessfullyModal implements OnInit {

    constructor(private _dialogRef: MatDialogRef<SuccessfullyModal>) { }

    ngOnInit() { }

    public closeDialog(): void {
        this._dialogRef.close();
    }
}