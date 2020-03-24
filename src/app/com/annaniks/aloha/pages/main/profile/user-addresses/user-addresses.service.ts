import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAddress, UserAddressData } from '../../../../core/models/user-address';

@Injectable()

export class UserAddressesService {
    constructor(private _httpClient: HttpClient) { }

    public getUserAddress(): Observable<UserAddress[]> {
        return this._httpClient.get<UserAddress[]>('/address')
    }
    public getAddressById(id: string): Observable<UserAddress> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.get<UserAddress>('/address', { params })
    }
    public createduserAddress(body: UserAddressData): Observable<UserAddress> {
        return this._httpClient.post<UserAddress>('/address', body);
    }
    public updateUserAddres(id: string, body: UserAddressData): Observable<UserAddress> {
        let params = new HttpParams();
        params = params.set('id', id)
        return this._httpClient.post<UserAddress>('/address', body, { params });
    }
    public deleteUserAddreses(id: string): Observable<UserAddress> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.delete<UserAddress>('/address', { params })
    }
}