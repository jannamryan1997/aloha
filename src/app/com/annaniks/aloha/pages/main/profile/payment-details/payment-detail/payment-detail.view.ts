import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteStep } from '../../../../../core/models/route-step';
import { MenuService } from 'src/app/com/annaniks/aloha/core/services/menu.service';

@Component({
    selector: 'payment-detail-view',
    templateUrl: 'payment-detail.view.html',
    styleUrls: ['payment-detail.view.scss']
})
export class PaymentDetailView implements OnInit, OnDestroy {
    public paymentForm: FormGroup;
    public isEdit: boolean = false;
    public title: string;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _menuService: MenuService,
        private _fb: FormBuilder,
    ) {
        this._checkRouteParams();
        this._setRouteSteps();
    }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder() {
        this.paymentForm = this._fb.group({
            reqv:[false],
            pay: [false],
            type:[null,Validators.required]
        })
    }
    private _checkRouteParams(): void {
        const addressId: string = this._activatedRoute.snapshot.params.id || null;
        this.isEdit = (addressId) ? true : false;
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
    public checkIsValid(controlName): boolean {
        return this.paymentForm.get(controlName).hasError('required') && this.paymentForm.get(controlName).touched;
    }


    ngOnDestroy() { }
}