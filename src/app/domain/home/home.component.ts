import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/userService';
import { BoardGameService } from '../../services/boardGameService';
import { BoardGame } from '../../model/boardGame';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public users: User[] = [];
  public boardGame: BoardGame = new BoardGame(-1, "DEBUG-boardgame")

  constructor(private userService: UserService, private boardGameService: BoardGameService){}

  ngOnInit(): void {}

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