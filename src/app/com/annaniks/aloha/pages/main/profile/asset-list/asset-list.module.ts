import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { AssetListComponent } from './asset-list.view';
import { AssetListRoutingModule } from './asset-list.routing.module';

@NgModule({
    declarations: [AssetListComponent],
    imports: [AssetListRoutingModule, SharedModule],
    providers: []
})

export class AssetListModule { }