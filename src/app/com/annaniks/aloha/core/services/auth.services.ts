import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../models/profile';

@Injectable()

export class AuthService {
    public user:User;
    constructor(private _httpClient: HttpClient) { }

    public getProfile(): Observable<User> {
        return this._httpClient.get<User>('/profile');
    }
}