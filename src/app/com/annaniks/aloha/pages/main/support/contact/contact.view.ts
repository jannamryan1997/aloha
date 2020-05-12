import { Component, OnInit } from "@angular/core";
import { RouteStep } from '../../../../core/models/route-step';
import { MenuService } from '../../../../core/services/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupportService } from '../support.service';
import { takeUntil, finalize } from 'rxjs/operators';
import { MsgData } from '../../../../core/models/msg';
import { SuccessfullyModal } from '../../../../core/modals';

@Component({
    selector: "contact-view",
    templateUrl: "contact.view.html",
    styleUrls: ["contact.view.scss"]
})

export class ContactView implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public privacyGroup: FormGroup;
    public loading: boolean = false;
    public messageError: String;
    constructor(
        private _menuService: MenuService, 
        private _fb: FormBuilder,
        private _supportService: SupportService,
        private _dialog: MatDialog,



        ) {
        const routeSteps: RouteStep[] = [
            { label: 'Main', routerLink: '/' },
            { label: 'Contact', routerLink: '/profile' }
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
                this._dialog.open(SuccessfullyModal, {
                    width: "666px",
                    height: "360px",
                    data: {
                        msg: 'add-msg',
                    }
                })
            },
                err => {
                    this.messageError = err.error.msg;
                })
    }

    public onClickcreateMsg(): void {
        this._createMsg();
    }


}