import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { Router } from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../user/interface/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  user$!: User;
  constructor(private httpService: HttpService,
              private router: Router) { }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.httpService.post(`${this.httpService.apiUrl}/auth/login`, credentials);
  }

  logout() {
    localStorage.removeItem('token')
    this.isAuthenticated = false
    this.router.navigate(['/'])
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      this.isAuthenticated = true
    }
    return this.isAuthenticated
  }
}
