import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedModule } from "../../../settings/shared/shared.module";
import { UserMenu } from "./userMenu";
import { NbMenuModule } from "@nebular/theme";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    NbMenuModule,
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserMenu,
  ],
})
export class UserModule { }
