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
    loadChildren: () => import('./features/home/home.routes'),
  },
  {
    path: 'agents',
    loadChildren: () => import('./features/agents/agents.routes'),
  },
  {
    path: 'crosshairs',
    loadChildren: () => import('./features/crosshairs/crosshairs.routes'),
  },
  {
    path: 'weapons',
    loadChildren: () => import('./features/weapons/weapons.routes'),
  },
  {
    path: 'lineups',
    loadChildren: () => import('./features/lineups/lineUps.routes'),
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.routes'),
  },
  {
    path: '**',
    loadChildren: () => import('./features/error/error.routes'),
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
