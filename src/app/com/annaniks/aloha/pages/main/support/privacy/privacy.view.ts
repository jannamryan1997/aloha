import { Component, OnInit } from "@angular/core";
import { MenuService } from '../../../../core/services/menu.service';
import { RouteStep } from '../../../../core/models/route-step';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupportService } from '../support.service';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { MsgData } from '../../../../core/models/msg';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "privacy-view",
    templateUrl: "privacy.view.html",
    styleUrls: ["privacy.view.scss"]
})

export class PrivacyView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public privacyGroup: FormGroup;
    public loading: boolean = false;
    public errorMessage: String;

    constructor(private _menuService: MenuService, 
        private _fb: FormBuilder, 
        private _supportService: SupportService,
        private _toastr:ToastrService,
        ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Terms', routerLink: '/privacy' }
        ]
        this._menuService.setRouteSteps(routeSteps);
    }

    ngOnInit() {
        this._formBuilder();
    }

    private _formBuilder(): void {
        this.privacyGroup = this._fb.group({
            subject: [null, Validators.required],
            text: [null, Validators.required]
        })
    }

    private _createMsg(): void {
        this.loading = true;
        this.privacyGroup.disable();
        let msgData: MsgData = {
            subject: this.privacyGroup.value.subject,
            text: this.privacyGroup.value.text,
        }
        this._supportService.creatMsg(msgData)
            .pipe(takeUntil(this._unsubscribe$),
                finalize(() => {
                    this.loading = false;
                    this.privacyGroup.enable();
                })
            )

            .subscribe((data) => {
                console.log(data);
                this._toastr.success('Your request has been successfully delivered.');

            },
                err => {
                    this.errorMessage = err.error.msg;
                }
            )
    }

    public onClickcreateMsg(): void {
        this._createMsg();
    }
}