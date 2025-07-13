import { APP_INITIALIZER, NgModule, provideZoneChangeDetection } from "@angular/core";
import { Config } from "./services/config";
import { provideRouter, RouterOutlet } from '@angular/router';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { routes } from "./app.routes";
import { HomeComponent } from "./domain/home/home.component";
import { NavBarComponent } from "./domain/components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { BoardGameCellComponent } from "./domain/components/boardgame-cell/boardgame-cell.component";
import { DebugComponent } from "./domain/debug/debug.component";

export function configFactory(config: Config) {
    return () => {
        console.log('Initializing App Configuration...');
        return config.load();
    };
}
  
@NgModule({ 
    imports: [
        RouterOutlet,
        BrowserModule,
        NavBarComponent,
        BoardGameCellComponent,
        CommonModule,
    ],
    declarations: [ 
        AppComponent,
        HomeComponent,
        DebugComponent,
    ],
    bootstrap: [ AppComponent ],
    providers: [
        provideHttpClient(),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        Config,
        {
            provide: APP_INITIALIZER,
            useFactory: configFactory,
            deps: [Config],
            multi: true,
        },
    ],
})

export class AppModule {}