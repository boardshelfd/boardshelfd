import { APP_INITIALIZER, ApplicationConfig, ModuleWithProviders, NgModule, provideZoneChangeDetection } from "@angular/core";
import { Config } from "./services/config";
import { provideRouter, RouterOutlet } from '@angular/router';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { routes } from "./app.routes";

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
    ],
    declarations: [ AppComponent ],
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