import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './features/home';

const routes: Routes = [
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/error/error.module').then((m) => m.ErrorModule),
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
