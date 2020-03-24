import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainService {

    constructor(private _httpClient: HttpClient) { }

    public getCountries(): Observable<any[]> {
        return this._httpClient.get<any[]>('/assets/data/countries.json');
    }
}