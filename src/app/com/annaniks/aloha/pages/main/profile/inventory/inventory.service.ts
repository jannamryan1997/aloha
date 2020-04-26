import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order, OrderData } from '../../../../core/models/order';
import { ServerResponse } from '../../../../core/models/server-response';
import { GoodsResponse } from '../../../../core/models/goods';


@Injectable()

export class InventoryService {

    constructor(private _httpClient: HttpClient) { }

    public getOrder(): Observable<Order[]> {
        return this._httpClient.get<Order[]>('/order');
    }

    public getGoods(): Observable<GoodsResponse> {
        return this._httpClient.get<GoodsResponse>('/goods');
    }

    public addOrder(body: OrderData): Observable<ServerResponse> {
        return this._httpClient.post<ServerResponse>('/order', body);
    }
}