import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "app-registration",
    templateUrl: "registration.view.html",
    styleUrls: ["registration.view.scss"]
})

export class RegistrationView implements OnInit {
    public registrationForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.registrationForm = this._fb.group({
            email: [null, Validators.required],
            password: [null, Validators.required]
        })
    }
    public checkIsValid(controlName): boolean {
        return this.registrationForm.get(controlName).hasError('required') && this.registrationForm.get(controlName).touched;
    }
}