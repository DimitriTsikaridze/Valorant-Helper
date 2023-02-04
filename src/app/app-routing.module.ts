import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module'),
  },
  {
    path: 'agents',
    loadChildren: () => import('./features/agents/agents.module'),
  },
  {
    path: 'crosshairs',
    loadChildren: () => import('./features/crosshairs/crosshairs.module'),
  },
  {
    path: 'weapons',
    loadChildren: () => import('./features/weapons/weapons.module'),
  },
  {
    path: 'lineups',
    loadChildren: () => import('./features/lineups/lineUps.module'),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/error/error.component').then((c) => c.ErrorComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
