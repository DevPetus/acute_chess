import { ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { tokenInterceptor } from './interceptors/token.interceptor';

export const interceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: tokenInterceptor, multi: true };

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(HttpClientModule), interceptorProvider]
};
