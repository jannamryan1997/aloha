import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { PayBillView } from '../../../../core/modals';

@Component({
    selector: "payment-view",
    templateUrl: "payment.view.html",
    styleUrls: ["payment.view.scss"]
})
export class PaymentView implements OnInit {

    constructor(private _dialog: MatDialog) { }

    ngOnInit() { }

    private _openPayBillModal(): void {
        const dialogRef = this._dialog.open(PayBillView, {
            width: "100vw",
            maxWidth: "770px"
        })
    }

    public onSbmit(): void {
        this._openPayBillModal();
    }
}