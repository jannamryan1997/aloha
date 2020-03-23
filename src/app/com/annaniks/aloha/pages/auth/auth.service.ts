import { Injectable } from "@angular/core";
import { RegistrationData, RegistrationResponse } from '../../core/models/registration';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginResponse, LoginData } from '../../core/models/login';


@Injectable()

export class AuthService {

    constructor(private _httpClient: HttpClient) { }

    public registration(body: RegistrationData): Observable<RegistrationResponse> {
        let params = new HttpParams();
        params = params.set('authorization', 'false');
        return this._httpClient.post<RegistrationResponse>('/register', body, { params });
    }
    public login(cred:LoginData): Observable<LoginResponse> {
        let params = new HttpParams();
        params = params.set('authorization', 'false');
        params = params.set('cred', cred.toString())
        return this._httpClient.get<LoginResponse>('/login', { params })
    }
}