import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { PayBillView } from 'src/app/com/annaniks/aloha/core/modals';
import { Payment } from 'src/app/com/annaniks/aloha/core/models/payment';

@Component({
    selector: "payment-list-item",
    templateUrl: "payment-list-item.component.html",
    styleUrls: ["payment-list-item.component.scss"]
})

export class PaymentListItemComponent implements OnInit {
    @Input() paymentData: Payment;
    public hive: boolean = false;
    constructor(private _dialog: MatDialog) { }

    ngOnInit() { }

    private _openPayBillModal(): void {
        const dialogRef = this._dialog.open(PayBillView, {
            width: "100vw",
            maxWidth: "770px"
        })
    }
    private _openStandartHive(): void {
        this.hive = !this.hive;
    }

    public onSbmit(): void {
        this._openPayBillModal();
    }

    public onclick(): void {
        this._openStandartHive();
    }
}