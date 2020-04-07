import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../../../core/models/payment';

@Injectable()
export class PaymentService {
    constructor(private _httpClient: HttpClient) { }

    public getPayment(): Observable<Payment[]> {
        return this._httpClient.get<Payment[]>('/payment');
    }
}