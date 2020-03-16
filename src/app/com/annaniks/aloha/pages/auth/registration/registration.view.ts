import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { RegistrationData } from '../../../core/models/registration';

@Component({
    selector: "app-registration",
    templateUrl: "registration.view.html",
    styleUrls: ["registration.view.scss"]
})

export class RegistrationView implements OnInit {
    public registrationForm: FormGroup;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public closeRegistrationMain: boolean = true;
    public errorMessage: string;

    constructor(private _fb: FormBuilder, private _authService: AuthService) { }

    ngOnInit() {
        this._formBuilder();
    }
    private _formBuilder(): void {
        this.registrationForm = this._fb.group({
            email: [null, Validators.required],
            name: [null, Validators.required],
            phone: [null, Validators.required]
        })
    }
    private _registration(): void {
        let registrationData: RegistrationData = {
            email: this.registrationForm.value.email,
            phone: this.registrationForm.value.phone,
            name: this.registrationForm.value.name,
        }
        this._authService.registration(registrationData)
            .pipe(
                takeUntil(this._unsubscribe$),
            ).subscribe((data) => {
                console.log(data);
                this.closeRegistrationMain = false;
            }),
            err => {
                this.closeRegistrationMain = true;
                this.errorMessage = err.error.message;
            }
    }
    public onclickRegistration(): void {
        this._registration();
    }
    public checkIsValid(controlName): boolean {
        return this.registrationForm.get(controlName).hasError('required') && this.registrationForm.get(controlName).touched;
    }
}