import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../components/navbar/navbar.component';
import { BoardGameCellComponent } from '../components/boardgame-cell/boardgame-cell.component';
import { NgFor, NgIf } from '@angular/common';
import { GamesStub } from '../../stub/stub';
import { BoardGameDetails } from '../../model/boardGameDetails';

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

  constructor(private stub: GamesStub){}

  ngOnInit(): void {
    this.collection = this.stub.myGames;
  }
}