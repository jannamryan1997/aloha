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
    public keyword = 'name';
    public data = [
        {
            name: 'Armenia'
        },
        {
            name: 'England'
        },
        {
            name: 'Russia'
        },
        {
            name: "China"
        }
    ];
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
        this._getProfile();
      //  this._setProfileValues();
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

    private _getProfile(): void {
        this._authService.getProfile().pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                this._userId = data.body.id;
                this._promocode = data.body.promocode;
                this._contact = data.body.contract;
                this.userAccountGroup.patchValue({
                    name: data.body.name,
                    phonenumber: data.body.phone,
                    country: data.body.country,
                    email: data.body.email,
                    details: data.body.details,
                })
              console.log(data);
              
            })
           
    }
    private _setProfileValues(): void {
        console.log(this._authService.user);
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
        console.log(user, "giii");

    }
    private _postProfile(): void {
        this.loading = true;
        this.userAccountGroup.disable();
        let profileData: User = {
            id: this._userId,
            email: this.userAccountGroup.value.email,
            contract: this._contact,
            phone: this.userAccountGroup.value.phonenumber,
            country: this.userAccountGroup.value.country.name,
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
    public onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    public selectEvent(item) {
        // do something with selected item
    }
}