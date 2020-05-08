import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { InventoryService } from './inventory.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Order } from '../../../../core/models/order';

@Component({
    selector: "inventory-view",
    templateUrl: "inventory.view.html",
    styleUrls: ["inventory.view.scss"]
})

export class InventoryComponent implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public orderResponseData: Order[] = [];
    public loading: boolean = false;
    constructor(
        private _menuService: MenuService,
        private _inventoryService: InventoryService
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Inventory', routerLink: '/profile/inventory' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._getOrder();
    }

    private _getOrder(): void {
        this.loading = true;
        this._inventoryService.getOrder()
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => this.loading = false)
            )
            .subscribe((data: Order[]) => {
             this.orderResponseData = data;
            })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}