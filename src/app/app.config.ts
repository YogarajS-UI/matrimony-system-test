import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HammerModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {  provideHttpClient } from '@angular/common/http'; // Import HttpClientModule
import { provideToastr } from 'ngx-toastr';  
import { provideAnimations } from '@angular/platform-browser/animations';

const toastrConfig = {
  timeOut: 2000,               
  positionClass: 'toast-top-right', 
  preventDuplicates: false,    
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),
    provideHttpClient(),provideAnimations(),
        provideToastr(toastrConfig), importProvidersFrom(HammerModule)
  ]
};
