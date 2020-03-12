import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';

@Component({
    selector: "payment-details-view",
    templateUrl: "payment-details.view.html",
    styleUrls: ["payment-details.view.scss"]
})
export class PaymentDetailsView implements OnInit {

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Payment Details', routerLink: '/profile/payment-details' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }
}