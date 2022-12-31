import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {
    NbActionsModule,
    NbLayoutModule,
    NbMenuModule,
    NbSearchModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbSpinnerModule,
    NbThemeModule, NbCardModule,
} from '@nebular/theme';
import {NbSecurityModule} from "@nebular/security";
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {SharedModule} from "../shared/shared.module";
import { InfoCardsComponent } from './components/cards/info-cards/info-cards.component';
import {RouterLink} from "@angular/router";

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbSpinnerModule,
  NbEvaIconsModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  InfoCardsComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    NbThemeModule.forRoot({name: 'dark'}),
    ...NB_MODULES,
    NbCardModule,
    RouterLink
  ],
  exports: [
    ...COMPONENTS,
    ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    }
  }
}
