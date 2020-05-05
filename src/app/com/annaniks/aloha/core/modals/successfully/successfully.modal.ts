import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: "app-successfully",
    templateUrl: "successfully.modal.html",
    styleUrls: ["successfully.modal.scss"]
})

export class SuccessfullyModal implements OnInit {
    public showProfileMgg: boolean=false;
    constructor(@Inject(MAT_DIALOG_DATA) private _data, private _dialogRef: MatDialogRef<SuccessfullyModal>) { 
        if(this._data && this._data.msg==='profileUpdated'){
            this.showProfileMgg=true;
        }
    }

    ngOnInit() {
        console.log(this._data);

    }

    public closeDialog(): void {
        this._dialogRef.close();
    }
}