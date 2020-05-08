import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Billingdetails } from 'src/app/com/annaniks/aloha/core/models/payment-details';

@Component({
    selector: 'app-payment-list-item',
    templateUrl: 'payment-list-item.component.html',
    styleUrls: ['payment-list-item.component.scss']
})
export class PaymentListItemComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() item: Billingdetails;
    public type: string;
    public typeOption = [
        { name: "PayPal", value: "paypal" },
        { name: "Bank", value: "bank" },
        { name: "Check", value: "check" },
    ]
    constructor() { }

    ngOnInit() {
        this.typeOption.map((element,index) => {
            if (this.typeOption[index].value === this.item.type) {
                this.type = this.typeOption[index].name;
            }
        });
        
        // for (var i = 0; i < this.typeOption.length; i++) {
        //     if (this.typeOption[i].value === this.item.type) {
        //         this.type = this.typeOption[i].name;
        //     }
        // }
    }

    ngOnDestroy() { }
}