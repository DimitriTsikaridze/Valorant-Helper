import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withDisabledInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorHandlerInterceptor } from '@shared/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // withDisabledInitialNavigation(),
      withInMemoryScrolling()
    ),
    provideHttpClient(withInterceptors([errorHandlerInterceptor])),
  ],
};
