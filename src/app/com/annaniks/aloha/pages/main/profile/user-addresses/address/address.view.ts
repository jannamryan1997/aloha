import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouteStep } from 'src/app/com/annaniks/aloha/core/models/route-step';
import { MenuService } from 'src/app/com/annaniks/aloha/core/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'address-view',
    templateUrl: 'address.view.html',
    styleUrls: ['address.view.scss']
})
export class AddressView implements OnInit, OnDestroy {
    public addressControl: FormControl = new FormControl(null, [Validators.required]);
    public isEdit: boolean = false;
    public title: string;

    constructor(
        private _menuService: MenuService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router
    ) {
        this._checkRouteParams();
        this._setRouteSteps();
    }

    private _checkRouteParams(): void {
        const addressId: string = this._activatedRoute.snapshot.params.id || null;
        this.isEdit = (addressId) ? true : false;
    }

    private _setRouteSteps(): void {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Addresses', routerLink: '/profile/user-addresses' }
        ]
        this.title = (this.isEdit) ? 'Edit address' : 'Add address';
        const currentRoute: RouteStep = {
            label: this.title,
            routerLink: this._router.url
        }
        routeSteps.push(currentRoute);
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }

    ngOnDestroy() { }
}