import { NgModule } from "@angular/core";
import { SharedModule } from '../../../../shared/shared.module';
import { AssetListComponent } from './asset-list.view';
import { AssetListRoutingModule } from './asset-list.routing.module';
import { AssetListItemComponent } from './components';
import { AssetsListService } from './asset-list.service';
import { MessageModal } from '../../../../core/modals';

@NgModule({
    declarations: [
        AssetListComponent,
        AssetListItemComponent,
        MessageModal

    ],
    imports: [
        AssetListRoutingModule,
        SharedModule
    ],
    providers: [AssetsListService],
    entryComponents:[MessageModal]
})

export class AssetListModule { }