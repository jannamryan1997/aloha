import { Component, OnInit, AfterViewChecked, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked } from "@angular/core";
import { CookieService } from 'ngx-cookie';

@Component({
    selector: "auth-view",
    templateUrl: "auth-view.html",
    styleUrls: ["auth-view.scss"]
})
export class AuthView implements OnInit, AfterContentChecked {
    public showAuth: boolean = true;
    public login: string;
    public routerLink = "/auth";

    constructor(private _cookieService: CookieService) {

    }

    ngOnInit() { }

    ngAfterContentChecked() {
        console.log(this.showAuth);
        this.login = this._cookieService.get('login') || this._cookieService.get('registration');
        if (this.login && this.login === 'true') {
            this.showAuth = false;
         

        }
        else {
            this.showAuth = true;
        }
        this._cookieService.remove('login');
        this._cookieService.remove('registration');
    }
   
}