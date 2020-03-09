import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor() { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}