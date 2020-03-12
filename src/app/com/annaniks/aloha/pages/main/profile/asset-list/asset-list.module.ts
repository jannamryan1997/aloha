import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { AssetListComponent } from './asset-list.view';
import { AssetListRoutingModule } from './asset-list.routing.module';
import { AssetListItemComponent } from './components';

@NgModule({
    declarations: [
        AssetListComponent,
        AssetListItemComponent
    ],
    imports: [
        AssetListRoutingModule,
        SharedModule
    ],
    providers: []
})

export class AssetListModule { }