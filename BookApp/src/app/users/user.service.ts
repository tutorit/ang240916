import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>("/api/persons");
  }

  get(id:number){
    return this.http.get<User>("/api/persons/"+id);
  }

  save(user:User){
    return this.http.put<User>("/api/persons/"+user.id,user);
  }
}
