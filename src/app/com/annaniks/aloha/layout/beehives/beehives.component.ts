import { Component, OnInit, Input } from '@angular/core';
import { GoodsResponse } from '../../core/models/goods';
import { OrderData } from '../../core/models/order';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InventoryService } from '../../pages/main/profile/inventory/inventory.service';
import { SuccessfullyModal } from '../../core/modals';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: "beehives-app",
    templateUrl: "beehives.component.html",
    styleUrls: ["beehives.component.scss"]
})

export class BeehivesComponent implements OnInit {

    @Input() item: GoodsResponse;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public count: number = 0;
    public loading: boolean = false;
    public messageError: string;
    public totalPrice: number;
    public comment: string;

    constructor(private _inventoryService: InventoryService,
        private _dialog: MatDialog) {
    }

    ngOnInit() {
        this.totalPrice = this.count * this.item.price;
    }

    public addOrder(goodId): void {
        this.loading = true;
        let orderData: OrderData = {
            goods: goodId,
            count: this.count,
            action: "buy",
            message: this.comment,
        }
        this._inventoryService.addOrder(orderData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data) => {
                this._dialog.open(SuccessfullyModal, {
                    width: "666px",
                    height: "360px",
                    data: {
                        msg: "ordered"
                    }
                })
            },
                err => {
                    this.messageError = err.error.msg;
                }
            )
    }

    public changedOrderCount(message): void {
        if (message == "add") {
            this.count = this.count + 1;
            this.totalPrice = this.count * this.item.price;
        }
        else if (message == "remove" && this.count > 0) {
            this.count = this.count - 1;
            this.totalPrice = this.count * this.item.price;
        }
    }
    public countChange(event) {
        this.totalPrice = event * this.item.price;


    }
}