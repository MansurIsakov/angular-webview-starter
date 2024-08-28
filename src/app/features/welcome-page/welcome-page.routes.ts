import type { Routes } from '@angular/router';

import { MainLayoutComponent } from '@layouts/index';

import { WelcomePageComponent } from './welcome-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        data: {
          header: {
            title: 'Welcome Page',
            link: {
              title: 'Some Link',
              path: 'https://github',
            },
          },
        },
        component: WelcomePageComponent,
      },
    ],
  },
];
