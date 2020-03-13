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
    public hive: boolean = false;
    constructor(
        private _dialog: MatDialog,
        private _menuService: MenuService
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Payments', routerLink: '/profile/payments' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }

    private _openPayBillModal(): void {
        const dialogRef = this._dialog.open(PayBillView, {
            width: "100vw",
            maxWidth: "770px"
        })
    }
    private _openStandartHive(): void {
        this.hive = !this.hive;
    }

    public onSbmit(): void {
        this._openPayBillModal();
    }

    public onclick(): void {
        this._openStandartHive();
    }
}