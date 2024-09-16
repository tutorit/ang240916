import { Injectable } from '@angular/core';
import { Book } from '../entities/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books:Book[]=[
    new Book(1,"Hobbit","Tolkien",12.4),
    new Book(2,"Player Piano","Vonnegut",11.5),
    new Book(3,"Mielensäpahoittaja","Kyrö",13.9),
    new Book(4,"Shining","King",14.2),
  ];

  constructor() { 
  }

  getAll():Book[]{
    return this.books;
  }

  get(id:number):Book{
    return this.books.find(b => b.id==id) || new Book(0,"Not","Found");
  }

  create(book:Book){
    let maxId=this.books.reduce((a,b) => a.id > b.id ? a: b).id;
    book.id=maxId+1;
    this.books.push(book);
  }

  save(book:Book){}

  deleteBook(id:number){
    let index=this.books.findIndex(b => b.id==id);
    if (index<0) return;
    this.books.splice(index,1);
  }

}
