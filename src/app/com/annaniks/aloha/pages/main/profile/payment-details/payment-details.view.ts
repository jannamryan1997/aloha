import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { PaymentDetailsService } from './payment-details.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BillingdetailsResponse } from '../../../../core/models/payment';

@Component({
    selector: "payment-details-view",
    templateUrl: "payment-details.view.html",
    styleUrls: ["payment-details.view.scss"]
})
export class PaymentDetailsView implements OnInit {

    private _unsubscribe$: Subject<void> = new Subject<void>();
    public paymentData: BillingdetailsResponse[] = [
        { id:"1",recv:true, pay: false, details: "janna"},
        { id:"2",recv:true, pay: false, details: "janna"},
        { id:"3",recv:true, pay: false, details: "janna"},
        { id:"4",recv:true, pay: false, details: "janna"},
        { id:"5",recv:true, pay: false, details: "janna"},
    ];

    constructor(private _menuService: MenuService, private _paymentDetailsService: PaymentDetailsService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Payment Details', routerLink: '/profile/payment-details' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._getBillingdetails();
    }

    private _getBillingdetails(): void {
        this._paymentDetailsService.getBillingdetails()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: BillingdetailsResponse) => {
                // this.paymentData=data;
                console.log(data);

            })
    }
}