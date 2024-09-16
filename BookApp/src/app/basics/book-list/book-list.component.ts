import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../../entities/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  public books:Book[]=[];

  constructor(private service:BookService){}

  ngOnInit(){
    this.books=this.service.getAll();
  }

}
