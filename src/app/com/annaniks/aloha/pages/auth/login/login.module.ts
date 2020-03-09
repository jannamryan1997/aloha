import { NgModule } from "@angular/core";
import { LoginRoutingModule } from './login.routing.module';
import { LoginView } from './login.view';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [LoginView],
    imports: [LoginRoutingModule,FormsModule,ReactiveFormsModule,CommonModule]
})

export class LoginModule { }