import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Country } from '../models/profile';

@Injectable()

export class AuthService {
    public user: User;
    public count :Country[];
    constructor(private _httpClient: HttpClient) { }

    public getProfile(): Observable<User> {
        return this._httpClient.get<User>('/profile');
    }
}