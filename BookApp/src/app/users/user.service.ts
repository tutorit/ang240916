import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { concatAll, filter, map } from 'rxjs';

@Injectable()
export class UserService {
  private users:User[]=[];

  constructor(private http:HttpClient) { }

  getAll(){
    let ret=this.http.get<User[]>("/api/persons");
    ret.pipe(
        concatAll(),
        filter(u => !this.users.some(ut => ut.id==u.id))
      )
      .subscribe(u => {
        this.users.push(u);
      });
    return this.users;
  }

  get(id:number):User{
    //return this.http.get<User>("/api/persons/"+id);
    let user=this.users.find(u => u.id==id) || new User();
    if (!user.id) {
      this.http.get<User>("/api/persons/"+id).subscribe(u => {
        console.log("Tuli",u)
        Object.assign(user,u);
        this.users.push(u);
      })
    }
    return user;
  }

  save(user:User){
    let ret=this.http.put<User>("/api/persons/"+user.id,user);
    ret.subscribe({
      next: u => {
        let existing=this.users.find(user => u.id==user.id);
        if (existing) Object.assign(existing,u);
        //else this.users.push(u);
      },
      error:e => {
        console.log("Virhe palvelin ei tallettanut");
      }
    })
    return ret;
  }

  testRxjs(){
    this.http.get<User[]>("/api/persons")
      .pipe(
        concatAll(),
        filter(p => p.username.includes("n")),
        map(p => p.firstName)
      )
      .subscribe(p => console.log("Person",p));
  }
}
