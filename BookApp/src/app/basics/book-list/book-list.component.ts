import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../../entities/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  public books:Book[]=[];

  constructor(private service:BookService,private router:Router){}

  ngOnInit(){
    this.books=this.service.getAll();
  }

  public goto(book:Book){
    this.router.navigate(['/books',book.id])
  }
}
