import { Component, Input, OnInit } from "@angular/core";
import { BoardGameDetails } from "../../../model/boardGameDetails";
import { BoardGameService } from "../../../services/boardGameService";
import { BoardGame } from "../../../model/boardGame";

@Component({
  selector: 'user-collection',
  templateUrl: './user-collection.component.html',
  styleUrl: './user-collection.component.css'
})
export class UserCollectionComponent implements OnInit {

  @Input() username: string | undefined;

  public collection?: BoardGameDetails[];

  constructor(private boardGameService: BoardGameService){}

  ngOnInit(): void {
    try {
      if (this.username) {
        this.boardGameService.getUserCollection(this.username).subscribe({
          next: (b: BoardGame[]) => {
            this.collection = b;
          },
          error: (e: any) => {
            console.error(e);
          }
        });
      }
      else {
        throw new Error("Username is not defined");
      }
    } catch (e) {
        console.error(e);
    }
    
  }
}