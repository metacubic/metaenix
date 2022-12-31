import {ModuleWithProviders, NgModule} from '@angular/core';
import { LayoutComponent } from './layout.component';
import { OneColumnLayoutComponent } from "./layouts/one-column/one-column.layout";
import { TwoColumnsLayoutComponent } from "./layouts/two-columns/two-columns.layout";
import { ThreeColumnsLayoutComponent } from "./layouts/three-columns/three-columns.layout";
import { SharedModule } from "../../shared/shared.module";
import { ThemeModule } from "../theme.module";
import {NbActionsModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbTooltipModule} from "@nebular/theme";

const layoutComponents = [
  OneColumnLayoutComponent,
  TwoColumnsLayoutComponent,
  ThreeColumnsLayoutComponent,
];
@NgModule({
  imports: [
    SharedModule,
    ThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbTooltipModule,
    NbActionsModule,
  ],
  declarations: [
    LayoutComponent,
    ...layoutComponents,
  ],
  exports: [
    LayoutComponent,
    ...layoutComponents,
  ],
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: []
    };
  }
}
