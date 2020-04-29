import { Component, OnInit, OnDestroy } from "@angular/core";
import { RouteStep } from '../../../core/models/route-step';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuService } from '../../../core/services/menu.service';
import { takeUntil, filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SupportMessageModal } from '../../../core/modals/support-message/support-message.modal';


@Component({
    selector: "support-view",
    templateUrl: "support.view.html",
    styleUrls: ["support.view.scss"]
})

export class SupportView implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public title: string;
    public beehives: boolean = false;
    public url: string;
    public routeSteps: RouteStep[] = [];

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _menuService: MenuService,
        private _matDialog: MatDialog,
    ) { }

    ngOnInit() {
        this.url = this._router.url;
        this._setTitle();
        this._handleRouteEvents();
        this._handleRouteStepsEvent();
        this._openSupportMessagesModal();
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
    private _setTitle(): void {
        const title: string = this._activatedRoute.firstChild.snapshot.data.title || '';
        this.title = title;
    }

    private _openSupportMessagesModal(): void {
        const dialogRef = this._matDialog.open(SupportMessageModal, {
            width: "700px",
            height:"400px"
        })
    }



    ngOnDestroy() {
        this._unsubscribe$.next();
        this._unsubscribe$.complete();
    }

}