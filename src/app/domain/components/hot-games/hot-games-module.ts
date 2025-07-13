import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavBarComponent } from "../navbar/navbar.component";
import { BoardGameCellComponent } from "../boardgame-cell/boardgame-cell.component";
import { NgFor, NgIf } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { HotGamesComponent } from "./hot-games.component";

@NgModule({ 
    imports: [
        BrowserModule,
        NavBarComponent,
        BoardGameCellComponent,
        NgIf,
        NgFor,
    ],
    declarations: [ 
        HotGamesComponent,
    ],
    providers: [
        provideHttpClient(),
    ],
    exports: [
        HotGamesComponent,
    ],
})

export class HotGamesModule {}