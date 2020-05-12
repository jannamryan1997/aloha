import { Component, OnInit} from "@angular/core";
import { CookieService } from 'ngx-cookie';

@Component({
    selector: "auth-view",
    templateUrl: "auth-view.html",
    styleUrls: ["auth-view.scss"]
})
export class AuthView implements OnInit {
    public showAuth: boolean = true;
    public login: string;
    public routerLink = "/auth";

    constructor() {

    }

    ngOnInit() { }


   
}