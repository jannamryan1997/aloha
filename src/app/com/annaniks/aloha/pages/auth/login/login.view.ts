import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
    selector: "auth-login",
    templateUrl: "login.view.html",
    styleUrls: ["login.view.scss"]
})

export class LoginView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public logIn: FormGroup;
    public errorMessage: string;


    constructor(private _fb: FormBuilder, private _authService: AuthService) { }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.logIn = this._fb.group({
            email: [null, Validators.required],
        })
    }
    private _login(email): void {
        this._authService.login(email)
            .pipe(
                takeUntil(this._unsubscribe$),
            ).subscribe((data) => {
                console.log(data);

            },
                err => {
                    this.errorMessage = err.error.message;
                }
            )

    }
    public onclickLogin(): void {
        this._login(this.logIn.value.email);
    }

    public checkIsValid(controlName): boolean {
        return this.logIn.get(controlName).hasError('required') && this.logIn.get(controlName).touched;
    }

}