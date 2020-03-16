import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';

@Injectable()

export class AppService {

    constructor(private _httpClient: HttpClient,private _cookieService:CookieService) { }

    public signOff(): Observable<any> {
        // this._cookieService.remove('1P_JAR');
        return this._httpClient.get('/signoff');
    }
}