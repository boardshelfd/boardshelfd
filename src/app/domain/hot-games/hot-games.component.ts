import { Component, OnInit } from '@angular/core';
import { BoardGameService } from '../../services/boardGameService';
import { BoardGame } from '../../model/boardGame';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { BoardGameCellComponent } from '../components/boardgame-cell/boardgame-cell.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    BoardGameCellComponent,
    NgIf, 
    NgFor,
  ],
  templateUrl: './hot-games.component.html',
  styleUrl: './hot-games.component.css'
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