import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../../core/services/auth.services';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit, AfterViewChecked {
    public menuOpened: boolean = false;
    public userName: string;
    public fa: string;
    constructor(
        private _appService: AppService,
        private _router: Router,
        private _cookieService: CookieService,
        private _authService: AuthService,

    ) {
        this.userName = this._authService.user.name;
    }

    ngOnInit() { }

    ngAfterViewChecked():void {
        this.userName = this._authService.user.name;
    }

    private _signOff(): void {
        this._appService.signOff()
            .subscribe((data) => {
                this._cookieService.removeAll();
                this._router.navigate(["/home"]);
            })
    }
    public onclickSignOff(): void {
        this._signOff();
    }

    public onClickOpenMenu(): void {
        this.menuOpened = !this.menuOpened;
    }

    public router(router): void {
        this._router.navigate([router]);
        this.menuOpened = false;
    }

    public copyInputMessage(userinput): void {
        userinput.select();
        document.execCommand('copy');
        userinput.setSelectionRange(0, 0);
    }
}