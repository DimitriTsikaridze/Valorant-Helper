import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeContainerComponent,
    title: 'Home',
  },

  {
    path: 'agents',
    loadChildren: () => import('./features').then((m) => m.AgentsModule),
    title: 'Agents',
  },

  {
    path: 'crosshairs',
    loadChildren: () => import('./features').then((m) => m.CrosshairsModule),
    title: 'Crosshairs',
  },
  {
    path: 'weapons',
    loadChildren: () => import('./features').then((m) => m.WeaponsModule),
    title: 'Weapons',
  },

  {
    path: 'lineups',
    loadChildren: () => import('./features').then((m) => m.LineupsModule),
    title: 'Lineups',
  },

  {
    path: 'about',
    loadChildren: () => import('./features').then((m) => m.AboutModule),
    title: 'About',
  },

  {
    path: '**',
    loadComponent: () => import('./features').then((c) => c.ErrorComponent),
    title: 'Error',
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
