import { Component, OnInit } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';

@Component({
    selector: "user-addresses-view",
    templateUrl: "user-addresses-view.html",
    styleUrls: ["user-addresses-view.scss"]
})
export class UserAddressesView implements OnInit {

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Addresses', routerLink: '/profile/user-addresses' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }
}