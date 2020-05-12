import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../../core/services/auth.services';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit, AfterViewChecked {
    public menuOpened: boolean = false;
    public userName: string;
    public promoCodeGroup: FormGroup;
    public fa: string;
    constructor(
        private _appService: AppService,
        private _router: Router,
        private _cookieService: CookieService,
        private _authService: AuthService,
        private _fb: FormBuilder,


    ) {
        this.userName = this._authService.user.name;
   
    }

    ngOnInit() {
        this._formBuilder();
         this._setPatchValue();
    }

    ngAfterViewChecked(): void {
        this.userName = this._authService.user.name;

    }

    private _formBuilder(): void {
        this.promoCodeGroup = this._fb.group({
            promoCode: [null]
        })
       }

       private _setPatchValue():void{
        this.promoCodeGroup.patchValue({
            promoCode:this._authService.user.promocode,
        })
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

    public copyInputMessage(inputElement): void {
        this.promoCodeGroup.enable();
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        this.promoCodeGroup.disable();
    }
}