import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/userService';
import { BoardGameService } from '../../services/boardGameService';
import { BoardGame } from '../../model/boardGame';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { BoardGameCellComponent } from '../components/boardgame-cell/boardgame-cell.component';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [
    NavBarComponent,
    BoardGameCellComponent
  ],
  templateUrl: './debug.component.html',
})
export class DebugComponent implements OnInit {
  public users: User[] = [];
  public boardGame: BoardGame = new BoardGame(-1, "DEBUG-boardgame", "description")
  public boardGame2: BoardGame = new BoardGame(-1, "DEBUG-boardgame", "description", "https://cf.geekdo-images.com/DahMIPzUpexvhUPAG3dGbA__thumb/img/uzogBNlLw3GBuGa1T6_8oQbADnY=/fit-in/200x150/filters:strip_icc()/pic8303209.jpg")

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