import { NgModule } from "@angular/core";
import { HomeRoutingModule } from './home.routing.module';
import { HomeView } from './home.view';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomeView],
    imports: [HomeRoutingModule,CommonModule],
    providers: []
})

export class HomeModule { }