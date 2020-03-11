import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-address-list-item',
    templateUrl: 'address-list-item.component.html',
    styleUrls: ['address-list-item.component.scss']
})
export class AddressListItemComponent implements OnInit {
    public content: string = `
    Account Name:Insta Corporation pty
    SWIFT CODE:NATAU003UA
    Account Number:098-155-162-185-125
    Bank Address:NATIONAL AVSTRIAL BANK LEVL 2, 424 St Kilda Road Australia `
    constructor() { }

    ngOnInit() { }
}