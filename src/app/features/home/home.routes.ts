import { Routes } from '@angular/router';
import { HomeContainerComponent } from 'src/app/features/home/home-container/home-container.component';

const homeRoutes = [
  {
    path: '',
    component: HomeContainerComponent,
  },
] as Routes;

export default homeRoutes;
