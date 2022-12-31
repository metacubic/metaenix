import { Route } from "@angular/router";

export const appRoutes: Route[] = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: '' },
  { path:'',
    children: [ // PUBLIC ROUTES
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    ]
  },
  { path:'', // AUTH ROUTES
    children: [
      { path: 'login', loadChildren: () => import('../settings/core/auth/assets/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('../settings/core/auth/assets/register/register.module').then(m => m.RegisterModule) },
    ]
  }
];
