import { Component, OnInit } from "@angular/core";

@Component({
    selector: "auth-view",
    templateUrl: "auth-view.html",
    styleUrls: ["auth-view.scss"]
})
export class AuthView implements OnInit {
    public routerLink = "/auth";
    constructor() { }

    ngOnInit() { }
}