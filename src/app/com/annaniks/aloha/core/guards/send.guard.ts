import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';

@Injectable()

export class SentGuard implements CanActivate {
    private _purchase: string;
    private _send: string;
    constructor(private _cookieService: CookieService, private _router: Router) {
        this._purchase = this._cookieService.get('purchase');
        this._send = this._cookieService.get('sacsessfully');
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (this._purchase && this._send) {
                // this._router.navigate(['/purchase/sent']);
            return true;
        }
        else if (this._purchase && !this._send) {
            this._router.navigate(['/purchase/purchaseBeehives']);
            return false;
        }
        else {
            this._router.navigate(['/purchase/request']);
            return false;
        }

    }
}