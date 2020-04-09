import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order, OrderData } from 'src/app/com/annaniks/aloha/core/models/order';
import { AssetsListService } from '../../asset-list.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MessageModal } from 'src/app/com/annaniks/aloha/core/modals';

@Component({
    selector: 'app-asset-list-item',
    templateUrl: 'asset-list-item.component.html',
    styleUrls: ['asset-list-item.component.scss']
})
export class AssetListItemComponent implements OnInit, OnDestroy {

    @Input() orderData: Order;
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        private _assetsListService: AssetsListService,
        private _toastr: ToastrService,
        private _dialog: MatDialog) { }

    ngOnInit() { }

    public sellOrder(id, quantity): void {
        let orderData: OrderData = {
            goods: id,
            count: quantity,
            action: "sell",
            message: "",
        }
        this._assetsListService.addOrder(orderData)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                const dialogRef = this._dialog.open(MessageModal, {
                    width: "666px"
                })
            },
                err => {
                    this._toastr.success("Can't find the object.");
                }
            )
    }

    ngOnDestroy() { }
}