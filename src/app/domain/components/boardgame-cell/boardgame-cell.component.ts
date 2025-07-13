import { Component, Input } from '@angular/core';
import { BoardGame } from '../../../model/boardGame';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'boardgame-cell',
  templateUrl: './boardgame-cell.component.html',
  styleUrl: './boardgame-cell.component.css',
  imports: [
    CommonModule
  ],
})
export class BoardGameCellComponent  {
  @Input() boardgame?: BoardGame;
}