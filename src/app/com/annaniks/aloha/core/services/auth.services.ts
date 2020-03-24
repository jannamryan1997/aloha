import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/profile';

@Injectable()

export class AuthService {
    public user: User;
    constructor(private _httpClient: HttpClient) { }

    public getProfile(): Observable<any> {
        return this._httpClient.get<any>('/profile', { observe: 'response' });
    }
}