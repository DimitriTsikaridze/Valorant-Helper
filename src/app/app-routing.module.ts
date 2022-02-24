import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'agents',
    loadChildren: () =>
      import('./agents/agents.module').then((m) => m.AgentsModule),
  },
  {
    path: 'crosshairs',
    loadChildren: () =>
      import('./crosshairs/crosshairs.module').then((m) => m.CrosshairsModule),
  },
  {
    path: 'line-ups',
    loadChildren: () =>
      import('./line-ups/line-ups.module').then((m) => m.LineUpsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
