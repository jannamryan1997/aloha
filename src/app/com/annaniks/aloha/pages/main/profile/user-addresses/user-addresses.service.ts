import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAddressResponse } from '../../../../core/models/user-address';

@Injectable()

export class UserAddressesService {
    constructor(private _httpClient: HttpClient) { }

    public getUserAddress(): Observable<UserAddressResponse> {
        return this._httpClient.get<UserAddressResponse>('/api/address')
    }
    public getAddressById(id: string): Observable<UserAddressResponse> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.get<UserAddressResponse>('/api/address', { params })
    }
    public createduserAddress(body: UserAddressResponse): Observable<UserAddressResponse> {
        return this._httpClient.post<UserAddressResponse>('/api/address', body);
    }
    public updateUserAddres(id: string, body: UserAddressResponse): Observable<UserAddressResponse> {
        let params = new HttpParams();
        params = params.set('id', id)
        return this._httpClient.post<UserAddressResponse>('/api/address', body, { params });
    }
    public deleteUserAddreses(id: string): Observable<UserAddressResponse> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.delete<UserAddressResponse>('/api/address', { params })
    }
}