import { Component, OnInit } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';

@Component({
    selector: "terms-view",
    templateUrl: "terms.view.html",
    styleUrls: ["terms.view.scss"]
})

export class TermsView implements OnInit {

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Terms', routerLink: '/profile' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }
}