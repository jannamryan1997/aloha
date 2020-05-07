import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { RegistrationData, RegistrationResponse } from '../../../core/models/registration';
import { CookieService } from 'ngx-cookie';

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
    public email: string;
    public loading: boolean = false;
    public dialCode:number;
    constructor(private _fb: FormBuilder, private _authService: AuthService,private _cookieService:CookieService) { }

    ngOnInit() {
        this._formBuilder();
    }
    private _formBuilder(): void {
        this.registrationForm = this._fb.group({
            email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            name: [null, Validators.required],
            phone: [null]
        })
    }
    private _registration(): void {
        this.loading = true;
        this.registrationForm.disable();
        let registrationData: RegistrationData = {
            email: this.registrationForm.value.email,
            phone: this.registrationForm.value.phone,
            name: this.registrationForm.value.name,
        }
        this._authService.registration(registrationData)
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                    this.registrationForm.enable();
                })
            ).subscribe((data: RegistrationResponse) => {
                this.email = data.email;
                this.closeRegistrationMain = false;
                this._cookieService.put('registration','true');
            },
                err => {
                    this.closeRegistrationMain = true;
                    this.errorMessage = err.error.msg;
                }
            )

    }
    public onclickRegistration(): void {
        this._registration();
    }
    public checkIsValid(controlName): boolean {
        return this.registrationForm.get(controlName).hasError('required') && this.registrationForm.get(controlName).touched;
    }
    
    public onCountryChange(event):void{
        this.dialCode = event.dialCode;
        this.registrationForm.patchValue({
            phone: this.dialCode,
        })
    }
        
    }

