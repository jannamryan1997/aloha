import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { takeUntil, finalize, count } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { ProfileService } from '../profile.service';
import { User, Country } from '../../../../core/models/profile';
import { AuthService } from '../../../../core/services/auth.services';
import { ToastrService } from 'ngx-toastr';
import { MainService } from '../../main.service';


@Component({
    selector: "user-account-view",
    templateUrl: "user-account.view.html",
    styleUrls: ["user-account.view.scss"]
})
export class UserAccountView implements OnInit {
    public userAccountGroup: FormGroup;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public loading: boolean = false;
    public data = [];
    private _userId: string;
    private _promocode: string;
    private _contact: number;
    private _user: User;
    public selectedCountry: Country;
    public keyword = 'name';
    public messageError: string;
    public countryData: Country[] = [];
    constructor(
        private _fb: FormBuilder,
        private _menuService: MenuService,
        private _profileService: ProfileService,
        private _authService: AuthService,
        private _toastr: ToastrService,
        private _mainService: MainService,
    ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Profile', routerLink: '/profile' }
        ]
        this._menuService.setRouteSteps(routeSteps);
        this._user = this._authService.user;
        this._getCountries();

    }

    ngOnInit() {
        this._formBuilder();
        this._setProfileValues();
    }

    private _formBuilder(): void {
        this.userAccountGroup = this._fb.group({
            name: [null, Validators.required],
            phonenumber: [null],
            country: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            details: [null]
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
            email: user.email,
            details: user.details,
        })
    }

    private _getCountries(): void {
        this._mainService.getCountries()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: Country[]) => {
                this.countryData = data;
                const userCountry: string = this._user.country;
                let country: Country;
                for (let i = 0; i < this.countryData.length; i++) {
                    if (this.countryData[i].code === userCountry){
                        country = this.countryData[i];
                    }
                }
                // const country: Country = this.countryData.find((element) => element.code == userCountry);
                if (country) {
                    this.userAccountGroup.patchValue({
                        country: country.name
                    })
                    this.selectedCountry = country;
                }
            },
                err => {
                    this.messageError = err.error.msg;
                }

            )

    }

    private _postProfile(): void {
        this.loading = true;
        this.userAccountGroup.disable();
        let profileData: User = {
            id: this._userId,
            email: this.userAccountGroup.value.email,
            contract: this._contact,
            phone: this.userAccountGroup.value.phonenumber,
            country: (this.selectedCountry && this.selectedCountry.code) ? this.selectedCountry.code : '',
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
                this._authService.user = data;
                this._toastr.success('Your request has been successfully delivered.');
              console.log(this._authService.user,"kkkkkkkk");
              
            },
                err => {
                    this.messageError = err.error.msg;
                }
            )
    }

    public selectEvent(country: Country): void {
        this.selectedCountry = country;
    }

    public onclickPostProfile(): void {
        this._postProfile();
    }

    public checkIsValid(controlName): boolean {
        return this.userAccountGroup.get(controlName).hasError('required') && this.userAccountGroup.get(controlName).touched;
    }

    get countries(): Observable<any> {
        return this._mainService.getCountries();
    }

    public onCountryChange(event):void{
        console.log(event);
        
    }
}