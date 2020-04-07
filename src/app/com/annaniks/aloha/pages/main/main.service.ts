import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryResponse } from '../../core/models/profile';

@Injectable()
export class MainService {

    constructor(private _httpClient: HttpClient) { }

    public getCountries(): Observable<CountryResponse> {
        return this._httpClient.get<CountryResponse>('/assets/data/countries.json');
    }
}