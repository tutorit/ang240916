import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  public id:number=0;

  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id=Number(params.get("id"));
    });
  }

  back(){
    this.router.navigate(["/books"]);
  }

}
