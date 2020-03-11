import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {
    public coupon: boolean = false;
    constructor() { }

    ngOnInit() { }

    private _openCouponMenu(): void {
        this.coupon = !this.coupon;
    }

    public onclick(): void {
        this._openCouponMenu();
    }
    public copyInputMessage(userinput): void {
        userinput.select();
        document.execCommand('copy');
        userinput.setSelectionRange(0, 0);
    }
}