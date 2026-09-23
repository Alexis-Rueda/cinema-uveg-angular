import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from '@movies/interceptors/request.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
      withHashLocation(),
      withViewTransitions({
        skipInitialTransition: true,
      }),
    ),
    provideHttpClient(
      withInterceptors([
        requestInterceptor
      ])
    ),
  ]
};
