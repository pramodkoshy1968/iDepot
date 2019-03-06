import { NgModule } from '@angular/core';

import { IDepotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IDepotSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IDepotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IDepotSharedCommonModule {}
