import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { HomeComponent } from './domain/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home',  pathMatch: 'full'},
    { 
        path: '', 
        component: AppComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                component: HomeComponent,
            }
        ]
    },
    { path: 'notfound', component: AppNotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
];
