import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'payment-detail-view',
    templateUrl: 'payment-detail.view.html',
    styleUrls: ['payment-detail.view.scss']
})
export class PaymentDetailView implements OnInit, OnDestroy {
    public paymentControl: FormControl = new FormControl(null, [Validators.required]);

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}