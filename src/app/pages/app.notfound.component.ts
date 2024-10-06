import { Component } from '@angular/core';
import { NavBarComponent } from '../domain/components/navbar/navbar.component';

@Component({
    standalone: true,
    imports: [
        NavBarComponent
      ],
    selector: 'app-notfound',
    templateUrl: './app.notfound.component.html',
    styleUrl: './app.notfound.component.css'
})
export class AppNotfoundComponent {}