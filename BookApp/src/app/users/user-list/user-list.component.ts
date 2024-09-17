import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../entities/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  public users:User[]=[];

  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.getAll().subscribe((users:User[]) => this.users=users);
  }
}
