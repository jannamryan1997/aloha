import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';


@Component({
    selector: "view-purchase-request",
    templateUrl: "purchase-request.view.html",
    styleUrls: ["purchase-request.view.scss"]
})

export class PurchaseRequestView implements OnInit {

    constructor(private _router:Router,private _cookieService:CookieService) { }

    ngOnInit() { }

    public onClickPurchaseBeehives():void{
        this._cookieService.put('purchase','purchaseBeehives');
        this._router.navigate(['/purchase/purchaseBeehives']);

    }
}