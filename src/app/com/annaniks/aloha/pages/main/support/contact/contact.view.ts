import { Component, OnInit } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';
import { SupportMessageModal } from '../../../../core/modals';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: "contact-view",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit {

    constructor(private _menuService: MenuService, private _matDialog: MatDialog) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Contact', routerLink: '/profile' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._openSupportMessagesModal();
    }

    private _openSupportMessagesModal(): void {
        const dialogRef = this._matDialog.open(SupportMessageModal, {
            width: "700px",
            minWidth: "400px",
            panelClass: ['padding-10'],
        })
    }
}