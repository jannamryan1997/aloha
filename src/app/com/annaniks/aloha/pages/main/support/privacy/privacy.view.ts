import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupportService } from '../support.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { MsgData } from '../../../../core/models/msg';
import { ToastrService } from 'ngx-toastr';

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