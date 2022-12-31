import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import {NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule} from "@nebular/theme";
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {registerRoutes} from "./register.routes";

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(registerRoutes),
    NbCardModule,
    NbCheckboxModule,
    MatButtonModule,
    NbInputModule,
    NbButtonModule,
  ]
})
export class RegisterModule { }
