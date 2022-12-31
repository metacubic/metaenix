import { Injectable } from '@angular/core';
import {User} from "./interface/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: User;
  constructor() { }

  getUser(): User {
    return this.user;
  }

  setUser(paramUser: User) {
    this.user = paramUser;
  }

}
