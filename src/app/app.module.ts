import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {appRoutes} from './app-routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbSidebarModule,
  NbMenuModule,
  NbDatepickerModule,
  NbDialogModule, NbWindowModule, NbToastrModule, NbChatModule
} from '@nebular/theme';
import { CoreModule } from "../settings/core/core.module";
import { LayoutModule } from "../settings/theme/layout/layout.module";
import { ThemeModule } from "../settings/theme/theme.module";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import {UserMenu} from "./modules/user/userMenu";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),

    CoreModule.forRoot(),
    LayoutModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [UserMenu],
  bootstrap: [AppComponent]
})
export class AppModule { }
