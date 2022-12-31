import { Component } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";
import { AuthService } from 'src/settings/core/auth/auth.service';

@Component({
  selector: 'app-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>

      <nb-sidebar *ngIf="isLoggedIn()" class="menu-sidebar" state="compacted" tag="left" start>
          <nb-menu [items]="dashboardMenu"></nb-menu>
      </nb-sidebar>

      <nb-sidebar *ngIf="isLoggedIn()" class="menu-sidebar" state="collapsed" tag="right" right>
        <nb-sidebar-header>
          <nb-actions size="small">
            <nb-action><mat-icon svgIcon="message" nbTooltip="Messages"></mat-icon></nb-action>
            <nb-action><mat-icon svgIcon="bubble_chart" nbTooltip="Bubble Chat"></mat-icon></nb-action>
            <nb-action><mat-icon svgIcon="cast" nbTooltip="Go Live"></mat-icon></nb-action>
          </nb-actions>
        </nb-sidebar-header>
        <nb-menu [items]="user"></nb-menu>
        <nb-sidebar-footer>
          <nb-actions size="small">
            <nb-action><mat-icon svgIcon="settings_suggest" nbTooltip="Settings"></mat-icon></nb-action>
            <nb-action><mat-icon svgIcon="mat_solid:apps" nbTooltip="Apps"></mat-icon></nb-action>
            <nb-action><mat-icon svgIcon="logout" nbTooltip="Logout" (click)="logout()"></mat-icon></nb-action>
          </nb-actions>
        </nb-sidebar-footer>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {
  dashboardMenu: NbMenuItem[] = [
    {
      title: 'E-commerce',
      icon: 'shopping-cart-outline',
      link: '/pages/dashboard',
      home: true,
      children: undefined,
    },
    {
      title: 'IoT Dashboard',
      icon: 'home-outline',
      link: '/pages/iot-dashboard',
      children: undefined,
    },
  ];

  user: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
      children: [
        {
          title: 'View Profile',
          link: '/pages/user/profile',
        },
        {
          title: 'Edit Profile',
          link: '/pages/user/edit-profile',
        }
      ],
    }
  ];

  constructor(private authService: AuthService) { }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
