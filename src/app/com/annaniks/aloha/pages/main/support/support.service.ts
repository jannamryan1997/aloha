import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MsgData, MsgResponse } from '../../../core/models/msg';

@Injectable()

export class SupportService {

    constructor(private _httpClient: HttpClient) { }

    public creatMsg(body: MsgData): Observable<MsgResponse[]> {
        return this._httpClient.post<MsgResponse[]>('/msg', body)
    }
}