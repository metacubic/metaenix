import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {loginRoutes} from "./login.routes";
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule} from "@nebular/theme";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(loginRoutes),
    NbInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbButtonModule
  ]
})
export class LoginModule { }
