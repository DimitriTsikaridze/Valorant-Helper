import { Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/features/error/error.component';

const errorRoutes = [
  {
    path: '',
    component: ErrorComponent,
  },
] as Routes;

export default errorRoutes;
