import { Component, OnInit } from '@angular/core';
import { BoardGameService } from '../../../services/boardGameService';
import { BoardGame } from '../../../model/boardGame';
import { BoardGameCellComponent } from '../boardgame-cell/boardgame-cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hot-games',
  templateUrl: './hot-games.component.html',
  styleUrl: './hot-games.component.css',
  standalone: true,
  imports: [
    CommonModule,
    BoardGameCellComponent
  ],
})
export class HotGamesComponent implements OnInit {

  public hotGames?: BoardGame[];

  constructor(private boardGameService: BoardGameService){}

  ngOnInit(): void {
    try {
      this.boardGameService.getHotBoardGame().subscribe({
          next: (b: BoardGame[]) => {
            this.hotGames = b;
          },
          error: e => {
            console.error(e);
          }
      });
    } catch (e) {
        console.error(e);
    }
  }
}