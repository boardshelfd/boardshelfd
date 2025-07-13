import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/userService';
import { BoardGameService } from '../../services/boardGameService';
import { BoardGame } from '../../model/boardGame';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.css',
})
export class DebugComponent implements OnInit {
  public users: User[] = [];
  public boardGame: BoardGame = new BoardGame(-1, "No game loaded...");
  public boardGame2: BoardGame[] = [new BoardGame(-1, "No game loaded...")];

  public hotGames?: BoardGame[];

  constructor(private userService: UserService, private boardGameService: BoardGameService){}

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

  public getABoardGameById():void{
    try {
      this.boardGameService.getBoardGameById(2536).subscribe({
          next: (b: BoardGame) => {
              this.boardGame = b;
          },
          error: e => {
              console.error(e);
          }
      });
    } catch (e) {
        console.error(e);
    }
  }

  public getABoardGameByName():void{
    try {
      this.boardGameService.getBoardGameByName("catan").subscribe({
          next: (b: BoardGame[]) => {
              console.log(b);
              this.boardGame2 = b;
          },
          error: e => {
              console.error(e);
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
            console.error(e);
          }
      });
    } catch (e) {
        console.error(e);
    }
  }
}