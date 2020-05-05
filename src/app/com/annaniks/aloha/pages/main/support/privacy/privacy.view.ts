import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
@Component({
    selector: "privacy-view",
    templateUrl: "privacy.view.html",
    styleUrls: ["privacy.view.scss"]
})

export class PrivacyView implements OnInit {
    

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Privacy', routerLink: '/privacy' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

   ngOnInit(){}
}