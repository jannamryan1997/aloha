import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProfileService } from '../profile.service';
import { User } from '../../../../core/models/profile';
import { AuthService } from '../../../../core/services/auth.services';

@Component({
    selector: "user-account-view",
    templateUrl: "user-account.view.html",
    styleUrls: ["user-account.view.scss"]
})
export class UserAccountView implements OnInit {
    public userAccountGroup: FormGroup;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public loading: boolean = false;
    private _userId: string;
    private _promocode: string;
    private _contact: number;
    constructor(
        private _fb: FormBuilder,
        private _menuService: MenuService,
        private _profileService: ProfileService,
        private _authService: AuthService
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Profile', routerLink: '/profile' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._formBuilder();
        // this._getProfile();
        this._setProfileValues();
    }

    private _formBuilder(): void {
        this.userAccountGroup = this._fb.group({
            name: [null, Validators.required],
            phonenumber: [null, Validators.required],
            country: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            details: [null, Validators.required]
        })
    }
    private _setProfileValues(): void {
        const user: User = this._authService.user;
        this._userId = user.id;
        this._promocode = user.promocode;
        this._contact = user.contract;
        this.userAccountGroup.patchValue({
            name: user.name,
            phonenumber: user.phone,
            country: user.country,
            email: user.email,
            details: user.details,
        })
    }
    // private _getProfile(): void {
    //     this._profileService.getProfile()
    //         .pipe(takeUntil(this._unsubscribe$))
    //         .subscribe((data: ProfileResponse) => {
    //             console.log(data, "hixxxxxxxx");
    //             this._userId = data.id;
    //             this._promocode = data.promocode;
    //             this._contact = data.contract;
    //             this.userAccountGroup.patchValue({
    //                 name:data.name,
    //                 phonenumber:data.phone,
    //                 country:data.country,
    //                 email: data.email,
    //                 details: data.details,
    //             })

    //         })
    // }

    private _postProfile(): void {
        this.loading = true;
        this.userAccountGroup.disable();
        let profileData:User = {
            id: this._userId,
            email: this.userAccountGroup.value.email,
            contract: this._contact,
            phone: this.userAccountGroup.value.phonenumber,
            country: this.userAccountGroup.value.country,
            name: this.userAccountGroup.value.name,
            details: this.userAccountGroup.value.details,
            promocode: this._promocode,
        }
        this._profileService.postProfile(profileData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                    this.userAccountGroup.enable();
                })
            )
            .subscribe((data) => {
                console.log(data);
            },
                err => {
                    err = err.error.msg;
                }
            )
    }
    public onclickPostProfile(): void {
        this._postProfile();
    }
    public checkIsValid(controlName): boolean {
        return this.userAccountGroup.get(controlName).hasError('required') && this.userAccountGroup.get(controlName).touched;
    }
}