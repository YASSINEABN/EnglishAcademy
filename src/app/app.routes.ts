import { Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'register/:id', component: FormsComponent }, // Register route
];
