import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BillingdetailsResponse } from 'src/app/com/annaniks/aloha/core/models/payment';

@Component({
    selector: 'app-payment-list-item',
    templateUrl: 'payment-list-item.component.html',
    styleUrls: ['payment-list-item.component.scss']
})
export class PaymentListItemComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() item: BillingdetailsResponse;

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}