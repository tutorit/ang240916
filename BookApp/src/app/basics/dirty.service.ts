import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirtyService {
  public isDirty:boolean=true;
  public message:string="";


  constructor() { 
    console.log("Created")
  }
}
