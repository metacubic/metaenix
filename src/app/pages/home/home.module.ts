import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from "../../../settings/shared/shared.module";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routes";
import {NbCardModule} from "@nebular/theme";
import {ThemeModule} from "../../../settings/theme/theme.module";
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
    NbCardModule,
    ThemeModule,
  ]
})
export class HomeModule { }
