import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../entities/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  public user:User=new User();

  constructor(private route:ActivatedRoute,private userService:UserService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let id=Number(params.get("id"));
      this.userService.get(id).subscribe(user => {
        this.user=user;
      })
    })
  }

  save(){
    this.userService.save(this.user).subscribe(u => 0);
  }
}
