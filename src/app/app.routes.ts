import type { Routes } from '@angular/router';

import { MinimalLayoutComponent } from '@layouts/index';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/features.routes').then(m => m.routes),
  },
  {
    path: 'page-not-found',
    component: MinimalLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./shared/screens').then(c => c.NotFoundComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];
