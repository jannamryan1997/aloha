import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../../../core/models/profile';


@Injectable()

export class ProfileService {

    constructor(private _httpClient: HttpClient) { }

    public getProfile(): Observable<ProfileResponse> {
        return this._httpClient.get<ProfileResponse>('/profile');
    }
    public postProfile(body: ProfileResponse): Observable<ProfileResponse> {
        return this._httpClient.post<ProfileResponse>('/profile', body)
    }

}