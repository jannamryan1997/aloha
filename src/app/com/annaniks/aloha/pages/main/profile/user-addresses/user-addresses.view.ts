import { Component, OnInit } from "@angular/core";
import { Validators, FormControl } from '@angular/forms';

@Component({
    selector: "user-addresses-view",
    templateUrl: "user-addresses-view.html",
    styleUrls: ["user-addresses-view.scss"]
})
export class UserAddressesView implements OnInit {
    public addressesControl: FormControl = new FormControl(null, [Validators.required]);
    constructor() { }

    ngOnInit() { }
}