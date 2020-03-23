import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.services';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return this._authService.getProfile().pipe(
            map((data) => {
                if (data) {
                    this._authService.user = data;
                    return true;
                }
                else {
                    this._router.navigate(["/home"]);
                    return false;
                }
            }),
            catchError((err) => {
                this._router.navigate(["/home"]);
                return throwError(false)

            })
        )

    }
}