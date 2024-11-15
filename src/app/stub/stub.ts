import { Injectable } from "@angular/core";
import { BoardGameService } from "../services/boardGameService";
import { BoardGameDetails } from "../model/boardGameDetails";

@Injectable({providedIn: 'root'})
export class GamesStub {
    public myGames: BoardGameDetails[] = [];
    
    constructor(private boardGameService: BoardGameService) {
        this.getMyGames();
    }

    private getGamesId(): number[] {
        return [
            237182, // Root
            275215, // Namiji
            414317, // Harmonies
            328479, // Living Forest
            411881, // Gold'n Crash
            311715, // Mini Rogue
            293207, // Eila
            1472, // Les 5 rois
            275044, // Lueur
            68448, // 7 Wonders
        ];
    }

    private getMyGames(): void{
        try {
            this.getGamesId().map(id => {
                this.boardGameService.getBoardGameById(id).subscribe({
                    next: (game: BoardGameDetails) => {
                        this.myGames.push(game);
                    },
                    error: e => {
                        console.error(e);
                    }
                });
            });
        } catch (e) {
            console.error(e);
        }
    }
}