import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';

@Component({
    selector: "asset-list-view",
    templateUrl: "asset-list.view.html",
    styleUrls: ["asset-list.view.scss"]
})

export class AssetListComponent implements OnInit {

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Asset List', routerLink: '/profile/asset-list' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }
}