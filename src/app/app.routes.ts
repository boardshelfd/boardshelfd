import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { HomeComponent } from './domain/home/home.component';
import { DebugComponent } from './domain/debug/debug.component';

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
            },
            {
                path: 'debug',
                component: DebugComponent,
            },
        ]
    },
    { path: 'notfound', component: AppNotfoundComponent },
    { path: '**', redirectTo: '/notfound' },
];
