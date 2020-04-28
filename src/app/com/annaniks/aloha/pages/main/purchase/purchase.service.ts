import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoodsResponse } from '../../../core/models/goods';
import { OrderData } from '../../../core/models/order';

@Injectable()

export class PurchaseService {
    constructor(private _httpClient: HttpClient) { }

    public getGoot(): Observable<GoodsResponse[]> {
        return this._httpClient.get<GoodsResponse[]>('/goods');
    }
    public createdOrder(body: OrderData): Observable<OrderData[]> {
        return this._httpClient.post<OrderData[]>('/order', body);
    }
}