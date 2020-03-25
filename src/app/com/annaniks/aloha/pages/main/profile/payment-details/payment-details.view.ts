import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { PaymentDetailsService } from './payment-details.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Billingdetails } from '../../../../core/models/payment';

@Component({
    selector: "payment-details-view",
    templateUrl: "payment-details.view.html",
    styleUrls: ["payment-details.view.scss"]
})
export class PaymentDetailsView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public paymentData: Billingdetails[] = [];
    public loading: boolean = false;

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
        this.loading = true;
        this._paymentDetailsService.getBillingdetails()
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => this.loading = false)
            )
            .subscribe((data: Billingdetails[]) => {
                this.paymentData = data;
            })
    }
}