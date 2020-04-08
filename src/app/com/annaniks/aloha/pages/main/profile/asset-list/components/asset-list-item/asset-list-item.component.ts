import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'src/app/com/annaniks/aloha/core/models/order';

@Component({
    selector: 'app-asset-list-item',
    templateUrl: 'asset-list-item.component.html',
    styleUrls: ['asset-list-item.component.scss']
})
export class AssetListItemComponent implements OnInit, OnDestroy {

@Input() orderData:Order;
    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}