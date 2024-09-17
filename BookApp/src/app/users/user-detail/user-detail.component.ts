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
  public errorMsg:string="";

  constructor(private route:ActivatedRoute,private userService:UserService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let id=Number(params.get("id"));
      this.user=this.userService.get(id);
      /*
      .subscribe(user => {
        this.user=user;
      })
        */
    })
  }

  save(){
    this.errorMsg="";
    this.userService.save(this.user)
      .subscribe({
        next(u){
          console.log("Talletettu")            
        },
        error:e => {
          this.errorMsg="Virhe talletuksessa";
          console.log(e);
        },complete:() => "Detail, complete"
      });
  }
}
