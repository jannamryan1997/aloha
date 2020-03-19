import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/profile';

@Injectable()

export class ProfileService {

    constructor(private _httpClient: HttpClient) { }
    public postProfile(body: User): Observable<User> {
        return this._httpClient.post<User>('/profile', body)
    }

}