import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/userService';
import { BoardGameService } from '../../services/boardGameService';
import { BoardGame } from '../../model/boardGame';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { BoardGameCellComponent } from '../components/boardgame-cell/boardgame-cell.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    NavBarComponent,
    BoardGameCellComponent,
    NgIf, NgFor
  ],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css',
})
export class DebugComponent implements OnInit {
  public users: User[] = [];
  public boardGame: BoardGame = new BoardGame(-1, "No game loaded...")

  public hotGames?: BoardGame[];

  constructor(private userService: UserService, private boardGameService: BoardGameService){}

  ngOnInit(): void {
    try {
      this.boardGameService.getHotBoardGame().subscribe({
          next: (b: BoardGame[]) => {
              this.hotGames = b;
              console.log(this.hotGames)
          },
          error: e => {
              this.hotGames = [];
          }
      });
    } catch (e) {
        console.error(e);
    }
  }

  public getABoardGame():void{
    try {
      this.boardGameService.getBoardGameById(2536).subscribe({
          next: (b: BoardGame) => {
              this.boardGame = b;
          },
          error: e => {
              this.boardGame = this.boardGame;
          }
      });
    } catch (e) {
        console.error(e);
    }
  }

  public fetchUsers():void{
    try {
      this.userService.getAllUsers().subscribe({
          next: (u: User[]) => {
              this.users = u;
          },
          error: e => {
              this.users = [];
          }
      });
    } catch (e) {
        console.error(e);
    }
  }
}