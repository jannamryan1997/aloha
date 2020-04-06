import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Billingdetails, BillingdetailsData } from '../../../../core/models/payment-details';

@Injectable()

export class PaymentDetailsService {
    constructor(private _httpClient: HttpClient) { }

    public getBillingdetails(): Observable<Billingdetails[]> {
        return this._httpClient.get<Billingdetails[]>('/billingdetails');
    }
    
    public getBillingdetailsById(id: string): Observable<Billingdetails> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.get<Billingdetails>('/billingdetails', { params })
    }

    public createdBillingdetails(body: BillingdetailsData): Observable<Billingdetails> {
        return this._httpClient.post<Billingdetails>('/billingdetails', body);
    }

    public updateBillingdetails(body: BillingdetailsData, id: string): Observable<Billingdetails> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.post<Billingdetails>('/billingdetails', body, { params })
    }

    public deleteBillingdetails(id: string): Observable<Billingdetails> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.delete<Billingdetails>('/billingdetails', { params })
    }
}