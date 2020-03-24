import { Component, OnInit, Input } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';
import { UserAddressesService } from './user-addresses.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { UserAddress } from '../../../../core/models/user-address';

@Component({
    selector: "user-addresses-view",
    templateUrl: "user-addresses-view.html",
    styleUrls: ["user-addresses-view.scss"]
})
export class UserAddressesView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public userAddressData: UserAddress[] = [];
    public loading: boolean = false;

    constructor(private _menuService: MenuService, private _userAddressesService: UserAddressesService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Addresses', routerLink: '/profile/user-addresses' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._getUserAddress();
    }

    private _getUserAddress(): void {
        this.loading = true;
        this._userAddressesService.getUserAddress()
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => this.loading = false)
            )
            .subscribe((data: UserAddress[]) => {
                this.userAddressData = data;
            })
    }
}