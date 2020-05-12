import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { LoginResponse } from '../../../core/models/login';
import { CookieService } from 'ngx-cookie';


@Component({
    selector: "auth-login",
    templateUrl: "login.view.html",
    styleUrls: ["login.view.scss"]
})

export class LoginView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public logIn: FormGroup;
    public errorMessage: string;
    public loading: boolean = false;
    public email: string;
    public closeLoginMain: boolean = true;
   

    constructor(private _fb: FormBuilder, private _authService: AuthService, private _cookieService:CookieService) {
     
     }

    ngOnInit() {
        this._formBuilder();
     
    }

    private _formBuilder(): void {
        this.logIn = this._fb.group({
            email: [null, [Validators.required,	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),]],
        })
    }
    private _login(email): void {
    
        this.loading = true;
        this.logIn.disable();
        this._authService.login(email)
            .pipe(
                takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                    this.logIn.enable();
                })
            ).subscribe((data: LoginResponse) => {
                this.email = email;
                this.closeLoginMain = false;
           
            },
                err => {
                    
                    this.errorMessage ="User not found."
                    this.closeLoginMain = true;
                }
            )

    }
    public onclickLogin(): void {
        this._login(this.logIn.value.email);
    }

    public checkIsValid(controlName): boolean {
        return this.logIn.get(controlName).hasError('required') && this.logIn.get(controlName).touched ;
    }

}