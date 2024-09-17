import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { BookListComponent } from './books/book-list/book-list.component';
//import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { CalculatorComponent } from './basics/calculator/calculator.component';
import { BasicsMainComponent } from './basics/basics-main/basics-main.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import {PipeModule} from '../../../lib-workspace/dist/pipe-lib';
 
@NgModule({
  declarations: [
    AppComponent, 
    /*
    BookListComponent,
    BookDetailComponent,
    */
    CalculatorComponent,
    BasicsMainComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BooksModule,
    /*UsersModule*/
    PipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
