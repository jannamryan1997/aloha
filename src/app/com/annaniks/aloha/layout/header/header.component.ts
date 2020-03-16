import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {
    public menuOpened: boolean = false;
    constructor(private _appService: AppService, private _router: Router) { }

    ngOnInit() { }

    private _signOff(): void {
        this._appService.signOff()
            .subscribe((data) => {
                console.log(data);
                this._router.navigate(["/auth/login"]);
            })
    }
    public onclickSignOff(): void {
        this._signOff();
    }

    public onClickOpenMenu(): void {
        this.menuOpened = !this.menuOpened;
    }

    public copyInputMessage(userinput): void {
        userinput.select();
        document.execCommand('copy');
        userinput.setSelectionRange(0, 0);
    }
}