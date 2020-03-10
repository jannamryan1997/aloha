import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "auth-login",
    templateUrl: "login.view.html",
    styleUrls: ["login.view.scss"]
})

export class LoginView implements OnInit {
    public logIn: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.logIn = this._fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        })
    }
    public checkIsValid(controlName): boolean {
        return this.logIn.get(controlName).hasError('required') && this.logIn.get(controlName).touched;
    }

}