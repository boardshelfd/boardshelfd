import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/userService';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {}

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