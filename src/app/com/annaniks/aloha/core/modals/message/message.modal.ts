import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.services';

@Component({
    selector: "app-message",
    templateUrl: "message.modal.html",
    styleUrls: ["message.modal.scss"]
})

export class MessageModal implements OnInit {
    public email: string;
    constructor(private _autService: AuthService) {
        this.email = this._autService.user.email;   
    }

    ngOnInit() { }
}