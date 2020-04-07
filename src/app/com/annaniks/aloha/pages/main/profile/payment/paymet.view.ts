import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { PaymentService } from './payment.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: "payment-view",
    templateUrl: "payment.view.html",
    styleUrls: ["payment.view.scss"]
})
export class PaymentView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public paymentResponseData:PaymentResponse;
    constructor(
        private _menuService: MenuService,
        private _paymentService: PaymentService,
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Payments', routerLink: '/profile/payments' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._getPayment();
    }

    private _getPayment(): void {
        this._paymentService.getPayment()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data:PaymentResponse)=>{
                this.paymentResponseData=data;
                console.log(data);
                
            })
    }


}