// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../src/env/env';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
bootstrapApplication(AppComponent, {
  
  providers: [
    provideRouter(routes), // Provide your routes here
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()), provideAnimationsAsync(),
     
  ],

}).catch((err) => console.error(err));
provideFirebaseApp(() => initializeApp(environment.firebase))
provideFirestore(() => getFirestore())