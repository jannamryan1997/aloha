import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder, MaxLengthValidator } from '@angular/forms';
import { RouteStep } from 'src/app/com/annaniks/aloha/core/models/route-step';
import { MenuService } from 'src/app/com/annaniks/aloha/core/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddressesService } from '../user-addresses.service';
import { UserAddress, UserAddressData } from 'src/app/com/annaniks/aloha/core/models/user-address';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RequestModal } from 'src/app/com/annaniks/aloha/core/modals';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'address-view',
    templateUrl: 'address.view.html',
    styleUrls: ['address.view.scss']
})
export class AddressView implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public isEdit: boolean = false;
    public title: string;
    public addressForm: FormGroup;
    public addressId: string;
    public errorMessage: string;
    public loading: boolean =false;
    public keyword = 'name';
    public data = [
        {
            name: 'AM'
        },
        {
            name: 'EN'
        },
        {
            name: 'RU'
        },
        {
            name: "CH"
        }
    ];

    constructor(
        private _menuService: MenuService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _fb: FormBuilder,
        private _userAddressesService: UserAddressesService,
        private _dialog: MatDialog,
        private _toastr: ToastrService,
    ) {
        this._checkRouteParams();
        this._setRouteSteps();
    }

    ngOnInit() {
        this._formBulder();
        if (this.isEdit) {
            this._getUserAddresById();
        }
    }

    private _formBulder(): void {
        this.addressForm = this._fb.group({
            address: [null, Validators.required],
            country: [null, Validators.required],
            zip: [null, Validators.required],
            billing: [false],
            main: [false]
        })
    }

    private _checkRouteParams(): void {
        const addressId: string = this._activatedRoute.snapshot.params.id || null;
        this.isEdit = (addressId) ? true : false;
        this.addressId = this._activatedRoute.snapshot.paramMap.get('id');
    }

    private _setRouteSteps(): void {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Addresses', routerLink: '/profile/user-addresses' }
        ]
        this.title = (this.isEdit) ? 'Edit address' : 'Add address';
        const currentRoute: RouteStep = {
            label: this.title,
            routerLink: this._router.url
        }
        routeSteps.push(currentRoute);
        this._menuService.setRouteSteps(routeSteps);
    }

    private _getUserAddresById(): void {
        this._userAddressesService.getAddressById(this.addressId)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data: UserAddress) => {
                this.addressForm.patchValue({
                    address: data.address,
                    billing: data.billing,
                    country: data.country,
                    zip: data.zip,
                    main: data.main,
                })
            },
                err => {

                }
            )
    }

    private _createduserAddress(): void {
        this.loading = true;
        this.addressForm.disable();
        const userAddressData: UserAddressData = {
            billing: this.addressForm.value.billing,
            main: this.addressForm.value.main,
            country: this.addressForm.value.country.name,
            zip: this.addressForm.value.zip,
            address: this.addressForm.value.address,
        }
        this._userAddressesService.createduserAddress(userAddressData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                    this.addressForm.enable();
                })

            ).subscribe((data) => {

                this._toastr.success('Your request has been successfully delivered.');
                this._router.navigate(['/profile/user-addresses']);
            },
                err => {
                    
                    this.errorMessage = err.error.msg;
                }
            )

    }

    private _updateUserAddress(): void {
        this.loading = true;
        this.addressForm.disable();
        const userAddressData: UserAddressData = {
            id: this.addressId,
            billing: this.addressForm.value.billing,
            main: this.addressForm.value.main,
            country: this.addressForm.value.country.name,
            zip: this.addressForm.value.zip,
            address: this.addressForm.value.address,
        }
        this._userAddressesService.updateUserAddres(this.addressId, userAddressData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                    this.addressForm.enable();
                })
            )
            .subscribe((data) => {
                this._toastr.success('Your request has been successfully delivered.');
                this._router.navigate(['/profile/user-addresses']);
            },
            err => {
                this.errorMessage = err.error.msg;
            }
            )
    }
    private _deleteAddresses(): void {
        this._userAddressesService.deleteUserAddreses(this.addressId)
            .pipe(takeUntil(this._unsubscribe$),
            )
            .subscribe((data) => {
                this._router.navigate(['/profile/user-addresses']);
            },
                err => {
                    this.errorMessage = err.error.msg;
                }
            )
    }
    public onClick(): void {
        if (!this.isEdit) {
            this._createduserAddress();
        }
        else if (this.isEdit) {
            this._updateUserAddress();
        }
    }
    public onClickDelete(): void {
        const dialogRef = this._dialog.open(RequestModal, {
            width: "600px"
        })
        dialogRef.afterClosed().subscribe((data) => {
            if (data == "yes") {
                this._deleteAddresses();

            }
        })
    }

    public checkIsValid(controlName): boolean {
        return this.addressForm.get(controlName).hasError('required') && this.addressForm.get(controlName).touched;
    }

    public onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }
    public selectEvent(item) {
        // do something with selected item
    }
    ngOnDestroy() { }
}

