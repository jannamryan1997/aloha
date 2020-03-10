import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: "user-account-view",
    templateUrl: "user-account.view.html",
    styleUrls: ["user-account.view.scss"]
})
export class UserAccountView implements OnInit {

    public userAccountGroup:FormGroup;
    constructor(private _fb:FormBuilder) { }

    ngOnInit() { 
        this._formBuilder();
    }

    private _formBuilder():void{
        this.userAccountGroup=this._fb.group({
            name:[null,Validators.required],
            phonenumber:[null,Validators.required],
            country:[null,Validators.required],
            email:[null,[Validators.required,Validators.email]],
            details:[null,Validators.required]
        })
    }
    public checkIsValid(controlName): boolean {
        return this.userAccountGroup.get(controlName).hasError('required') && this.userAccountGroup.get(controlName).touched;
    }
}