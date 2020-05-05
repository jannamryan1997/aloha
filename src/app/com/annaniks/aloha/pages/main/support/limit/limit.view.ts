import { Component, OnInit } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';

@Component({
    selector: "limit-view",
    templateUrl: "limit.view.html",
    styleUrls: ["limit.view.scss"]
})

export class LimitView implements OnInit {

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Credit cards', routerLink: '/profile' }
        ]
        this._menuService.setRouteSteps(routeSteps);
     }

    ngOnInit() { }
}