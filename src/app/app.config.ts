import { provideHttpClient } from "@angular/common/http";
import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './../app/app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { register } from 'swiper/element/bundle';

// register();

export const appConfig: ApplicationConfig = {
  providers: [
     { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'it',
      lang: 'it'
    }), provideClientHydration(withEventReplay())
  ],
};