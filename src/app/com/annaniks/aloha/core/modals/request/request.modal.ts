import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-request",
    templateUrl: "request.modal.html",
    styleUrls: ["request.modal.scss"]
})

export class RequestModal implements OnInit {

    constructor(private _dialogRef: MatDialogRef<RequestModal>) { }

    ngOnInit() { }

    private _deletItem(): void {
        this._dialogRef.close('yes');
    }
    public closeDialog(): void {
        this._dialogRef.close();
    }

    public onclick(): void {
        this._deletItem();
    }
}