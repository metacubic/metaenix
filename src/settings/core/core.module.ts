import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { IconModule } from "./icon/icon.module";

@NgModule({
  imports: [
    SharedModule,
    AuthModule,
    IconModule,
  ],
  declarations: [],
  exports: [
    AuthModule,
    IconModule,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
