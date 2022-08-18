import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    title: 'Home',
  },
  {
    path: 'agents',
    loadChildren: () =>
      import('./features/agents/agents.module').then((m) => m.AgentsModule),
    title: 'Agents',
  },
  {
    path: 'crosshairs',
    loadChildren: () =>
      import('./features/crosshairs/crosshairs.module').then(
        (m) => m.CrosshairsModule
      ),
    title: 'Crosshairs',
  },
  {
    path: 'weapons',
    loadChildren: () =>
      import('./features/weapons/weapons.module').then((m) => m.WeaponsModule),
    title: 'Weapons',
  },

  {
    path: 'lineups',
    loadChildren: () =>
      import('./features/lineups/lineUps.module').then((m) => m.LineupsModule),

    title: 'Lineups',
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
    title: 'About',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/error/error.component').then((c) => c.ErrorComponent),
    title: 'Error',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
