import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order, OrderData } from 'src/app/com/annaniks/aloha/core/models/order';
import { InventoryService } from '../../inventory.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MessageModal, SellOutModal } from 'src/app/com/annaniks/aloha/core/modals';

@Component({
    selector: 'app-inventory-item',
    templateUrl: 'inventory-item.component.html',
    styleUrls: ['inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit, OnDestroy {

    @Input() orderData: Order;
    public comment: string;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        private _inventoryService: InventoryService,
        private _dialog: MatDialog) { }

    ngOnInit() {}

    private _createdsellOrder(id: string, quantity): void {
        let orderData: OrderData = {
            goods: id.toString(),
            count: quantity,
            action: "sell",
            message: this.comment,
        }
        this._inventoryService.addOrder(orderData)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                const dialogRef = this._dialog.open(MessageModal, {
                    width: "666px",
                })
            },
                err => {
                }
            )
    }

    public sellOrder(id: string, quantity): void {
        const dialogRef = this._dialog.open(SellOutModal, {
            width: "666px",
        })
        dialogRef.afterClosed().subscribe((data) => {
            if (data.message == "yes") {
                this.comment = data.event;
                this._createdsellOrder(id, quantity)
            }
        })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}
