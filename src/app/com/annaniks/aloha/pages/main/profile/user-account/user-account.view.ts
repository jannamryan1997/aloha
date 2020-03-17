import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ProfileService } from '../profile.service';
import { ProfileResponse } from '../../../../core/models/profile';

@Component({
    selector: "user-account-view",
    templateUrl: "user-account.view.html",
    styleUrls: ["user-account.view.scss"]
})
export class UserAccountView implements OnInit {
    public userAccountGroup: FormGroup;
    private _unsubscribe$: Subject<void> = new Subject<void>();
    constructor(
        private _fb: FormBuilder,
        private _menuService: MenuService,
        private _profileService: ProfileService
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
        this._profileService.getProfile()
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: ProfileResponse) => {
                console.log(data, "hixxxxxxxx");
                this.userAccountGroup.value.name = data.name;
                this.userAccountGroup.value.phonenumber = data.phone || null;
                this.userAccountGroup.value.country = data.country || null;
                this.userAccountGroup.value.email = data.email || null;
                this.userAccountGroup.value.details = data.details || null;
            })
    }

    public checkIsValid(controlName): boolean {
        return this.userAccountGroup.get(controlName).hasError('required') && this.userAccountGroup.get(controlName).touched;
    }
}