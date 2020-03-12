import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { MenuService } from '../../../core/services/menu.service';
import { RouteStep } from '../../../core/models/route-step';

@Component({
    selector: "profile-view",
    templateUrl: "profile.view.html",
    styleUrls: ["profile.view.scss"]
})
export class ProfileView implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public title: string;
    public beehives: boolean = false;
    public routeSteps: RouteStep[] = [];

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _menuService: MenuService
    ) { }

    ngOnInit() {
        this._setTitle();
        this._handleRouteEvents();
        this._handleRouteStepsEvent();
    }

    private _handleRouteEvents(): void {
        this._router.events
            .pipe(
                takeUntil(this._unsubscribe$),
                filter((event) => event instanceof NavigationEnd)
            )
            .subscribe(() => {
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

    private _setTitle(): void {
        const title: string = this._activatedRoute.firstChild.snapshot.data.title || '';
        this.title = title;
    }

    private _openbeehives(): void {
        this.beehives = !this.beehives;
    }

    public onclick(): void {
        this._openbeehives();
    }

    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }
}