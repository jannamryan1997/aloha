import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: "app-successfully",
    templateUrl: "successfully.modal.html",
    styleUrls: ["successfully.modal.scss"]
})

export class SuccessfullyModal implements OnInit {
    public message: string;
    constructor(@Inject(MAT_DIALOG_DATA) private _data, private _dialogRef: MatDialogRef<SuccessfullyModal>) {
        if (this._data && this._data.msg === 'profileUpdated') {
            this.message = "Profile successfully  updated";
        }
        else if (this._data && this._data.msg === "update-address") {
            this.message = "Addresses successfully  updated";
        }
        else if (this._data && this._data.msg === "add-address") {
            this.message = "Addresses successfully added";
        }
        else if (this._data && this._data.msg === "update-payment-details") {
            this.message = "Billing details updated";
        }
        else if (this._data && this._data.msg === "add-payment-details") {
            this.message = "Billing details successfully added";
        }
        else if (this._data && this._data.msg === "ordered") {
            this.message = "Ordered successfully";
        }
        else if (this._data && this._data.msg === 'add-msg') {
            this.message = "The message was successfully sent";
        }

    }

    ngOnInit() { }

    public closeDialog(): void {
        this._dialogRef.close();
    }
}