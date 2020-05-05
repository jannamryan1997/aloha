import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { PayBillView } from 'src/app/com/annaniks/aloha/core/modals';
import { Payment } from 'src/app/com/annaniks/aloha/core/models/payment';
import { InventoryService } from '../../../inventory/inventory.service';
import { GoodsResponse } from 'src/app/com/annaniks/aloha/core/models/goods';
import { Subject } from 'rxjs';
import { takeUntil, first } from 'rxjs/operators';
import { PurchaseService } from '../../../../purchase/purchase.service';

@Component({
    selector: "payment-list-item",
    templateUrl: "payment-list-item.component.html",
    styleUrls: ["payment-list-item.component.scss"]
})

export class PaymentListItemComponent implements OnInit {
    @Input() paymentData: Payment;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public goodData: GoodsResponse[] = [];
    public goodDataName: string;
    public goodPrice:number;
    public hive: boolean = false;
    constructor(private _dialog: MatDialog, private _purchaseService: PurchaseService) { }

    ngOnInit() {
        this._getGood();
    }

    private _openPayBillModal(): void {
        const dialogRef = this._dialog.open(PayBillView, {
            width: "100vw",
            maxWidth: "770px"
        })
    }
    private _openStandartHive(): void {
        this.hive = !this.hive;
    }

    public _getGood(): void {
        this._purchaseService.getGoot()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                this.goodData = data;
                for (var i = 0; i < this.goodData.length; i++) {
                    if (this.paymentData.goods == parseInt(this.goodData[i].id)) {
                        this.goodDataName=this.goodData[i].name;
                        this.goodPrice=this.goodData[i].price;
                    }
                }


            })
    }

    public onSbmit(): void {
        this._openPayBillModal();
    }

    public onclick(): void {
        this._openStandartHive();
    }
}