import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { MenuService } from '../../../core/services/menu.service';
import { RouteStep } from '../../../core/models/route-step';
import { ProfileService } from './profile.service';
import { AssetsListService } from './asset-list/asset-list.service';
import { OrderData } from '../../../core/models/order';
import { GoodsResponse } from '../../../core/models/goods';

@Component({
    selector: "profile-view",
    templateUrl: "profile.view.html",
    styleUrls: ["profile.view.scss"]
})
export class ProfileView implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public title: string;
    public beehives: boolean = false;
    public url: string;
    public routeSteps: RouteStep[] = [];
    public count: number=1;
    public goodId: string;
    public goodData: GoodsResponse;
    
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _menuService: MenuService,
        private _assetsListService: AssetsListService,

    ) { }

    ngOnInit() {
        this.url = this._router.url;
        this._setTitle();
        this._handleRouteEvents();
        this._handleRouteStepsEvent();
        this._getGoods();
    }

    private _handleRouteEvents(): void {
        this._router.events
            .pipe(
                takeUntil(this._unsubscribe$),
                filter((event) => event instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.url = this._router.url;
                this._setTitle();
            })
    }

    private _handleRouteStepsEvent(): void {
        this._menuService.getRouteSteps
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                this.routeSteps = data;
            })

    }
    private _getGoods(): void {
        this._assetsListService.getGoods()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: GoodsResponse) => {
                this.goodData = data;
                console.log(this.goodData, "lllllll");

            })

    }


    private _setTitle(): void {
        const title: string = this._activatedRoute.firstChild.snapshot.data.title || '';
        this.title = title;
    }

    private _openbeehives(): void {
        this.beehives = !this.beehives;
    }
    private _closeBeehivesMain(): void {
        this.beehives = false;
    }


    public onclick(): void {
        this._openbeehives();
    }

    public onclickClosebeehives(): void {
        this._closeBeehivesMain();
    }

    public addOrder(goodId): void {
        let orderData: OrderData = {
            goods: goodId,
            count: this.count,
            action: "buy",
            message: "giiiii",
        }
        this._assetsListService.addOrder(orderData)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                console.log(data);

            })
    }


    public changedOrderCount(message): void {
        if (message == "add") {
            this.count = this.count + 1;

        }
        else if (message == "remove") {
            this.count = this.count - 1;
        }
    }
    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}