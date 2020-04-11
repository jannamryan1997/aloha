import { Component, OnInit, Input } from '@angular/core';
import { GoodsResponse } from '../../core/models/goods';
import { OrderData } from '../../core/models/order';
import { takeUntil, finalize } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { AssetsListService } from '../../pages/main/profile/asset-list/asset-list.service';
import { Subject } from 'rxjs';

@Component({
    selector: "beehives-app",
    templateUrl: "beehives.component.html",
    styleUrls: ["beehives.component.scss"]
})

export class BeehivesComponent implements OnInit {

    @Input() item: GoodsResponse;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public count: number = 1;
    public loading: boolean = false;
    public messageError: string;
    public totalPrice: number;

    constructor(private _assetsListService: AssetsListService,
        private _toastr: ToastrService ) {
    }

    ngOnInit() { 
        this.totalPrice =  this.count * this.item.price;   
    }

    public addOrder(goodId): void {
        this.loading = true;
        let orderData: OrderData = {
            goods: goodId,
            count: this.count,
            action: "buy",
            message: "",
        }
        this._assetsListService.addOrder(orderData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                })
            )
            .subscribe((data) => {
                this._toastr.success('Your request has been successfully delivered.');
            },
                err => {
                    this.messageError = err.error.msg;
                }
            )
    }

    public changedOrderCount(message): void {

        if (message == "add") {
            this.count = this.count + 1;
            this.totalPrice =  this.count * this.item.price;

        }
        else if (message == "remove" && this.count > 1) {
            this.count = this.count - 1;
            this.totalPrice =  this.count * this.item.price;
        }

    }
    // public countCange(event){
    //     this.totalPrice=this.totalPrice*event;

    // }
}