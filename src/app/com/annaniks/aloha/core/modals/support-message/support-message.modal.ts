import { Component, OnInit } from "@angular/core";
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupportService } from '../../../pages/main/support/support.service';
import { MsgData } from '../../models/msg';
import { takeUntil, finalize } from 'rxjs/operators';
import { SuccessfullyModal } from '../successfully/successfully.modal';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: "app-support-message",
    templateUrl: "support-message.modal.html",
    styleUrls: ["support-message.modal.scss"]
})

export class SupportMessageModal implements OnInit {
    private _unsubscribe$: Subject<void> = new Subject<void>();
    public privacyGroup: FormGroup;
    public loading: boolean = false;
    public messageError: String;
    constructor(
        private _fb: FormBuilder,
        private _supportService: SupportService,
        private _dialog: MatDialog,
        private _dialogRef: MatDialogRef<SupportMessageModal>,
    ) { }

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
                this._dialogRef.close();
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