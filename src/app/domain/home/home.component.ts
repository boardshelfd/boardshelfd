import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { BoardGameCellComponent } from '../components/boardgame-cell/boardgame-cell.component';
import { NgFor, NgIf } from '@angular/common';
import { BoardGameDetails } from '../../model/boardGameDetails';
import { BoardGame } from '../../model/boardGame';
import { BoardGameService } from '../../services/boardGameService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    BoardGameCellComponent,
    NgIf, 
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public collection?: BoardGameDetails[];

  constructor(private boardGameService: BoardGameService){}

  ngOnInit(): void {
    try {
      this.boardGameService.getUserCollection("AxlR_").subscribe({
          next: (b: BoardGame[]) => {
            this.collection = b;
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