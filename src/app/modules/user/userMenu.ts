import { NbMenuItem } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserMenu {
  getMenu(): Observable<NbMenuItem[]> {
    const userMenu: NbMenuItem[] = [
      {
        title: 'Profile',
        icon: 'person-outline',
        link: '/pages/profile',
      }
    ];
    return of([...userMenu]);

  }
}
