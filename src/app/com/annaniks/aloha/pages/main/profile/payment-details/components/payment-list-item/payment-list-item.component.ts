import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BillingdetailsResponse } from 'src/app/com/annaniks/aloha/core/models/payment';

@Component({
    selector: 'app-payment-list-item',
    templateUrl: 'payment-list-item.component.html',
    styleUrls: ['payment-list-item.component.scss']
})
export class PaymentListItemComponent implements OnInit, OnDestroy {
    @Input() id:string;
    @Input()item:BillingdetailsResponse;
    public content: string = `
    Account Name:Insta Corporation pty
    SWIFT CODE:NATAU003UA
    Account Number:098-155-162-185-125
    Bank Address:NATIONAL AVSTRIAL BANK LEVL 2, 424 St Kilda Road Australia `

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}