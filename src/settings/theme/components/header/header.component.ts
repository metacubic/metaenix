import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbSidebarService} from "@nebular/theme";
import {AuthService} from "../../../core/auth/auth.service";
import {User} from "../../../core/user/interface/user";
import {Subject} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  user!: User;

  userMenu = this.getMenuItems();

  constructor(private sidebarService: NbSidebarService,
              private authService: AuthService,) { }

  getMenuItems() {
    const userLink = this.user ?  '/pages/users/current/' : '';
    return [
      { title: 'Profile', link: userLink, queryParams: { profile: true } },
      { title: 'Log out', link: '/auth/logout' },
    ];
  }

  ngOnInit() {

  }

  toggleSidebarLeft() {
    this.sidebarService.toggle(false, 'left');
    return false;
  }

  toggleSidebarRight() {
    this.sidebarService.toggle(false, 'right');
    return false;
  }

  navigateHome() {

  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
