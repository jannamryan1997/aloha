import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable()

export class PurchaseGuard implements CanActivate {

    private _purchase:string;
    private _send:string;
    constructor(private _cookieService: CookieService,private _router:Router) {
        this._purchase=this._cookieService.get('purchase');
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this._purchase) {
            console.log(this._purchase);
            return true;
        }
        else {
            this._router.navigate(['/purchase/request']);
            return false;
        }
    }
}
