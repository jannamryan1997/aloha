import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../core/models/profile';

@Injectable()
export class MainService {

    constructor(private _httpClient: HttpClient) { }

    public getCountries(): Observable<Country[]> {
        return this._httpClient.get<Country[]>('/assets/data/countries.json');
    }
}