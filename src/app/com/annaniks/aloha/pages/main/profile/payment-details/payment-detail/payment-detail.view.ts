import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteStep } from '../../../../../core/models/route-step';
import { MenuService } from 'src/app/com/annaniks/aloha/core/services/menu.service';
import { PaymentDetailsService } from '../payment-details.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BillingdetailsData} from 'src/app/com/annaniks/aloha/core/models/payment';
import { MatDialog } from '@angular/material/dialog';
import { RequestModal } from 'src/app/com/annaniks/aloha/core/modals';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'payment-detail-view',
    templateUrl: 'payment-detail.view.html',
    styleUrls: ['payment-detail.view.scss']
})
export class PaymentDetailView implements OnInit, OnDestroy {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public paymentForm: FormGroup;
    public isEdit: boolean = false;
    public title: string;
    public errorMessage: string;
    public paymentId: string;
    public loading:boolean=false;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _menuService: MenuService,
        private _fb: FormBuilder,
        private _paymentDetailsService: PaymentDetailsService,
        private _dialog: MatDialog,
        private _toastr:ToastrService
    ) {
        this._checkRouteParams();
        this._setRouteSteps();
    }

    ngOnInit() {
        this._formBuilder();
        if (this.isEdit) {
            this._getBillingdetailsById();
        }
    }

    private _formBuilder() {
        this.paymentForm = this._fb.group({
            reqv: [false],
            pay: [false],
            type: [null, Validators.required]
        })
    }
    private _checkRouteParams(): void {
        const addressId: string = this._activatedRoute.snapshot.params.id || null;
        this.isEdit = (addressId) ? true : false;
        this.paymentId = addressId;
    }

    private _setRouteSteps(): void {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Payment details', routerLink: '/profile/payment-details' }
        ]
        this.title = (this.isEdit) ? 'Edit payment' : 'Add payment';
        const currentRoute: RouteStep = {
            label: this.title,
            routerLink: this._router.url
        }
        routeSteps.push(currentRoute);
        this._menuService.setRouteSteps(routeSteps);
    }

    private _getBillingdetailsById(): void {
        this._paymentDetailsService.getBillingdetailsById(this.paymentId)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data:BillingdetailsData) => {
                this.paymentForm.patchValue({
                    reqv: data.recv,
                    pay: data.pay,
                    type: data.details,
                })
            })
    }
    private _createdBillingdetails(): void {
        this.loading = true;
        this.paymentForm.disable();
        const billingdetailsData: BillingdetailsData = {
            recv: this.paymentForm.value.reqv,
            pay: this.paymentForm.value.pay,
            details: this.paymentForm.value.type,
        }
        this._paymentDetailsService.createdBillingdetails(billingdetailsData)
            .pipe(takeUntil(this._unsubscribe$),
            finalize(()=>{
                this.loading=false;
                this.paymentForm.enable();
            })
            )
            .subscribe((data) => {
                console.log(data);
                this._toastr.success('Your request has been successfully delivered.');
                this._router.navigate(['/profile/payment-details']);
            },
                err => {
                    this.errorMessage = err.error.msg;
                }
            )
    }
    private _updateBillingdetails(): void {
        this.loading = true;
        this.paymentForm.disable();
        const billingdetailsData: BillingdetailsData = {
            recv: this.paymentForm.value.reqv,
            pay: this.paymentForm.value.pay,
            details: this.paymentForm.value.type,
        }
        this._paymentDetailsService.updateBillingdetails(billingdetailsData, this.paymentId)
            .pipe(takeUntil(this._unsubscribe$),
            finalize(()=>{
                this.loading=false;
                this.paymentForm.enable();
            })
            )
            .subscribe((data) => {
                this._toastr.success('Your request has been successfully delivered.');
                console.log(data);

                this._router.navigate(['/profile/payment-details'])
            },
                err => {
                    this.errorMessage = err.error.msg;
                }
            )
    }
    private _deleteBillingdetails(): void {
        this._paymentDetailsService.deleteBillingdetails(this.paymentId)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                console.log(data);
                this._toastr.success('Your request has been successfully delivered.');
                this._router.navigate(['/profile/payment-details']);
            },
                err => {
                    this.errorMessage = err.error.msg;
                }
            )
    }


    public onClick(): void {
        if (!this.isEdit) {
            this._createdBillingdetails();
        }
        else if (this.isEdit) {
            this._updateBillingdetails();
        }
    }
    public onClickDelete(): void {
        const dialogRef = this._dialog.open(RequestModal, {
            width: "600px"
        })
        dialogRef.afterClosed().subscribe((data) => {
            if (data == "yes") {
                this._deleteBillingdetails();
            }
        })

    }
    public checkIsValid(controlName): boolean {
        return this.paymentForm.get(controlName).hasError('required') && this.paymentForm.get(controlName).touched;
    }

    ngOnDestroy() { }
}