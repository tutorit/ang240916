import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirtyService } from '../dirty.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  @Input("id") public idBinding:number=0;
  public idSubscribe:number=0;
  @Input() public some:string="Facebook";

  constructor(private route:ActivatedRoute,
              private router:Router, 
              private location:Location,
              public dirtyService:DirtyService ){}

  ngOnInit(){
    this.route.queryParamMap.subscribe(qp => console.log(qp));
    this.route.paramMap.subscribe(params => {
      this.idSubscribe=Number(params.get("id"));
    });
  }

  back(){
    //this.router.navigate(["/books"]);
    this.location.back();
  }

}
