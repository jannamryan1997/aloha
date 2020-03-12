import { Component, OnInit } from '@angular/core';

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"]
})

export class HeaderComponent implements OnInit {
    public menuOpened: boolean = false;
    constructor() { }

    ngOnInit() { }

    public onClickOpenMenu(): void {
        this.menuOpened = !this.menuOpened;
    }

    public copyInputMessage(userinput): void {
        userinput.select();
        document.execCommand('copy');
        userinput.setSelectionRange(0, 0);
    }
}