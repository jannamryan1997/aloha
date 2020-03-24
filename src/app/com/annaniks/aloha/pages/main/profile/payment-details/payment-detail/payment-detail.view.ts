import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteStep } from '../../../../../core/models/route-step';
import { MenuService } from 'src/app/com/annaniks/aloha/core/services/menu.service';
import { PaymentDetailsService } from '../payment-details.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { BillingdetailsData, Billingdetails } from 'src/app/com/annaniks/aloha/core/models/payment';
import { MatDialog } from '@angular/material/dialog';
import { RequestModal } from 'src/app/com/annaniks/aloha/core/modals';

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

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _menuService: MenuService,
        private _fb: FormBuilder,
        private _paymentDetailsService: PaymentDetailsService,
        private _dialog: MatDialog,
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
            .subscribe((data: Billingdetails) => {
                this.paymentForm.patchValue({
                    reqv: data.recv,
                    pay: data.pay,
                    type: data.details,
                })
            })
    }
    private _createdBillingdetails(): void {
        const billingdetailsData: BillingdetailsData = {
            recv: this.paymentForm.value.reqv,
            pay: this.paymentForm.value.pay,
            details: this.paymentForm.value.type,
        }
        this._paymentDetailsService.createdBillingdetails(billingdetailsData)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
                console.log(data);
                this._router.navigate(['/profile/payment-details']);
            },
                err => {
                    this.errorMessage = err.error.msg;
                }
            )
    }
    private _updateBillingdetails(): void {
        const billingdetailsData: BillingdetailsData = {
            recv: this.paymentForm.value.reqv,
            pay: this.paymentForm.value.pay,
            details: this.paymentForm.value.type,
        }
        this._paymentDetailsService.updateBillingdetails(billingdetailsData, this.paymentId)
            .pipe(takeUntil(this._unsubscribe$))
            .subscribe((data) => {
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