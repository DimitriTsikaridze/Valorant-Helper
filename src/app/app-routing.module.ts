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
  },
  {
    path: 'agents',
    loadChildren: () =>
      import('./features/agents/agents.module').then((m) => m.AgentsModule),
  },
  {
    path: 'crosshairs',
    loadChildren: () =>
      import('./features/crosshairs/crosshairs.module').then(
        (m) => m.CrosshairsModule
      ),
  },
  {
    path: 'weapons',
    loadChildren: () =>
      import('./features/weapons/weapons.module').then((m) => m.WeaponsModule),
  },
  {
    path: 'lineups',
    loadChildren: () =>
      import('./features/lineups/lineUps.module').then((m) => m.LineupsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
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
