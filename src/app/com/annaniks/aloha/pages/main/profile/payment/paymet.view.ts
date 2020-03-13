import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { PayBillView } from '../../../../core/modals';
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';

@Component({
    selector: "payment-view",
    templateUrl: "payment.view.html",
    styleUrls: ["payment.view.scss"]
})
export class PaymentView implements OnInit {
 
    constructor(
      
        private _menuService: MenuService
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Payments', routerLink: '/profile/payments' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }


}