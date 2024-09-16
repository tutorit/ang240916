import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
 public fig1:number=2;
 public fig2:number=3;
 private subscription:any;

  constructor(private router:Router){
    console.log("Laskin luotiin");
  }

  ngOnInit(){
    console.log("Tilataan")
    this.subscription=this.router.events.subscribe(ev => {
      console.log("Router event",ev);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
