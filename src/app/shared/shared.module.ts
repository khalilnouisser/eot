import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreModule} from '../core';
import { InsightItemComponent } from './components/insight-item/insight-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [InsightItemComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [InsightItemComponent]
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Shared module in the AppModule only.`);
    }
  }
}
