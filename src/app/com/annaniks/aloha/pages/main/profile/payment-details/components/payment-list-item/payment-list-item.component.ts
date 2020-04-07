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

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}