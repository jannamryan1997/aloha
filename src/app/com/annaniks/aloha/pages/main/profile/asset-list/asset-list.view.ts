import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { AssetsListService } from './asset-list.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Order } from '../../../../core/models/order';

@Component({
    selector: "asset-list-view",
    templateUrl: "asset-list.view.html",
    styleUrls: ["asset-list.view.scss"]
})

export class AssetListComponent implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public orderResponseData: Order[];
    public loading: boolean = false;
    constructor(
        private _menuService: MenuService,
        private _assetsListService: AssetsListService
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Asset List', routerLink: '/profile/asset-list' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._getOrder();
    }

    private _getOrder(): void {
        this.loading = true;
        this._assetsListService.getOrder()
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => this.loading = false)
            )
            .subscribe((data: Order[]) => {
                this.orderResponseData = data;
                console.log(this.orderResponseData,"assets");

            })
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}