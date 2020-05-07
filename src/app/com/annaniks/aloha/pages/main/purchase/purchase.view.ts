import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: "view-purchase",
    templateUrl: "purchase.view.html",
    styleUrls: ["purchase.view.scss"]
})

export class PurchaseView implements OnInit {
    public router: string;
    constructor(private _router: Router) {
        this.router = this._router.url;
    
    }

    ngOnInit() {}
}