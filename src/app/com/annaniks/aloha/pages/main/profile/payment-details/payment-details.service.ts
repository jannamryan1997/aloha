import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BillingdetailsResponse, BillingdetailsData } from '../../../../core/models/payment';

@Injectable()

export class PaymentDetailsService {
    constructor(private _httpClient: HttpClient) { }

    public getBillingdetails(): Observable<BillingdetailsResponse> {
        return this._httpClient.get<BillingdetailsResponse>('/billingdetails');
    }
    
    public getBillingdetailsById(id: string): Observable<BillingdetailsResponse> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.get<BillingdetailsResponse>('/billingdetails', { params })
    }

    public createdBillingdetails(body: BillingdetailsData): Observable<BillingdetailsResponse> {
        return this._httpClient.post<BillingdetailsResponse>('/billingdetails', body);
    }

    public updateBillingdetails(body: BillingdetailsData, id: string): Observable<BillingdetailsResponse> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.post<BillingdetailsResponse>('/billingdetails', body, { params })
    }

    public deleteBillingdetails(id: string): Observable<BillingdetailsResponse> {
        let params = new HttpParams();
        params = params.set('id', id);
        return this._httpClient.delete<BillingdetailsResponse>('/billingdetails', { params })
    }
}