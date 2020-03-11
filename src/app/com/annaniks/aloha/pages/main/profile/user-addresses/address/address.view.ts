import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'address-view',
    templateUrl: 'address.view.html',
    styleUrls: ['address.view.scss']
})
export class AddressView implements OnInit, OnDestroy {
    public addressControl: FormControl = new FormControl(null, [Validators.required]);

    constructor() { }

    ngOnInit() { }

    ngOnDestroy() { }
}