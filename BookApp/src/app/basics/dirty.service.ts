import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirtyService {
  public isDirty:boolean=true;


  constructor() { 
    console.log("Created")
  }
}
