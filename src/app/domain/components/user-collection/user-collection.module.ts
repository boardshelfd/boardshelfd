import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavBarComponent } from "../navbar/navbar.component";
import { BoardGameCellComponent } from "../boardgame-cell/boardgame-cell.component";
import { NgFor, NgIf } from "@angular/common";
import { UserCollectionComponent } from "./user-collection.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({ 
    imports: [
        BrowserModule,
        NavBarComponent,
        BoardGameCellComponent,
        NgIf,
        NgFor,
    ],
    declarations: [ 
        UserCollectionComponent,
    ],
    providers: [
        provideHttpClient(),
    ],
    exports: [
        UserCollectionComponent,
    ],
})

export class UserCollectionModule {}