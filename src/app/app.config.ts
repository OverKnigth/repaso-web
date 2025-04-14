import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'app-log1',
        appId: '1:868728431563:web:00dbd7b915168452edcc4e',
        databaseURL: 'https://app-log1-default-rtdb.firebaseio.com',
        storageBucket: 'app-log1.firebasestorage.app',
        apiKey: 'AIzaSyDXev9YL6wRkdXVezshxFxXiBRwXFm37BE',
        authDomain: 'app-log1.firebaseapp.com',
        messagingSenderId: '868728431563',
        measurementId: 'G-99YGT7MQ22',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
};
