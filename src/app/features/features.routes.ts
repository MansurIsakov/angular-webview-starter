import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcome-page/welcome-page.routes').then(m => m.routes),
  },
];
