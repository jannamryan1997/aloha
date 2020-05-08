import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PurchaseService } from '../purchase.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GoodsResponse } from '../../../../core/models/goods';
import { OrderData } from '../../../../core/models/order';
import { CookieService } from 'ngx-cookie';


@Component({
    selector: "purchase-beehives-view",
    templateUrl: "purchase-beehives.view.html",
    styleUrls: ["purchase-beehives.view.scss"]
})

export class PurchaseBeehivesView implements OnInit {
    public purchaseForm: FormGroup;
    public loading: boolean = false;
    public messageError: string;
    public totalPrice: number;
    public price: number = 0;
    public goodId: number;
    public goodData: GoodsResponse[] = [];
    private _unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        private _fb: FormBuilder,
        private _purchaseService: PurchaseService,
        private _rouiter: Router,
        private _cookieService: CookieService,
    ) { }

    ngOnInit() {
        this._getGood();
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.purchaseForm = this._fb.group({
            type: [null, Validators.required],
            count: [1]
        })
    }

    public _getGood(): void {
        this._purchaseService.getGoot()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                this.goodData = data;

            })
    }

    public changedOrderCount(message): void {
        if (message == "add") {
            this.purchaseForm.get('count').setValue(this.purchaseForm.value.count += 1);
        }
        else if (message == "remove" && this.purchaseForm.value.count > 0) {
            this.purchaseForm.get('count').setValue(this.purchaseForm.value.count -= 1);
        }
        this.price = this.purchaseForm.value.count * this.totalPrice;
    }

    public onControlChange(event) {
        this.goodId = event;
        this.goodData.map((element,index)=>{////for i carch dzeve 
            if(this.goodData[index].id===event){
                this.totalPrice=this.goodData[index].price;
                this.price = this.totalPrice * this.purchaseForm.value.count;
            }
            
        })

    }
    private _createdOrder(): void {
        let orderData: OrderData = {
            goods: this.goodId.toString(),
            count: this.purchaseForm.value.count,
            action: "buy",
            message: "",
        }
        this._purchaseService.createdOrder(orderData)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                this._cookieService.put('sacsessfully', 'send');
                this._rouiter.navigate(['purchase/sent']);

            })
    }
    public onClickBuyOrder(): void {
        this._createdOrder();

    }
    public countChange(event) {
        this.price = event * this.totalPrice;
    }
}
