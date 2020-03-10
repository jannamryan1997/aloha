import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-pay-bill",
    templateUrl: "pay-bill-modal.html",
    styleUrls: ["pay-bill-modal.scss"]
})

export class PayBillView implements OnInit {

    constructor(private _dialogRef: MatDialogRef<PayBillView>) { }

    ngOnInit() { }

    private _closePayBillModal(): void {
        this._dialogRef.close();
    }

    public onSbmit(): void {
        this._closePayBillModal();
    }
}