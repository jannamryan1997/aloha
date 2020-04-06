import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class PaymentService{
    constructor(private _httpClient:HttpClient){}

    public getPayment():Observable<PaymentResponse>{
        return this._httpClient.get<PaymentResponse>('/payment');
    }
}