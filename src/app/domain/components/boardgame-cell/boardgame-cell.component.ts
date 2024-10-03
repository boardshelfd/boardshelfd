import { Component, Input } from '@angular/core';
import { BoardGame } from '../../../model/boardGame';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-boardgame-cell',
  standalone: true,
  imports: [NgIf],
  templateUrl: './boardgame-cell.component.html',
  styleUrl: './boardgame-cell.component.css'
})
export class BoardGameCellComponent  {
  @Input() boardgame?: BoardGame;
}