import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: "app-sell-out",
    templateUrl: "sell-out.modal.html",
    styleUrls: ["sell-out.modal.scss"]
})

export class SellOutModal implements OnInit {
public sellGroup:FormGroup;
    constructor(private _dialogRef: MatDialogRef<SellOutModal>,private _fb:FormBuilder) { }

    ngOnInit() {
        this._formBuilder();
     }

    private _formBuilder(): void {
        this.sellGroup = this._fb.group({
            text: [null, Validators.required]
        })
    }
    public onClickcreateMsg():void{
        this._dialogRef.close({event:this.sellGroup.value.text,message:"yes"});
    }
    public onClickCloseDialog(): void {
        this._dialogRef.close();
    }
}