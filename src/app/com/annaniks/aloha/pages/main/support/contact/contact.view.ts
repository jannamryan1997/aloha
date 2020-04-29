import { Component, OnInit } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';

@Component({
    selector: "contact-view",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit {

    constructor(private _menuService: MenuService) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Contact', routerLink: '/profile' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() { }
}