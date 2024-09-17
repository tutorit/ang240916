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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, authorsReducer, selectedReducer } from './reducers';
import { AuthorsComponent } from './authors/authors/authors.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorsDetailComponent } from './authors/authors-detail/authors-detail.component';
import { provideHttpClient } from '@angular/common/http';
 
@NgModule({
  declarations: [
    AppComponent, 
    /*
    BookListComponent,
    BookDetailComponent,
    */
    CalculatorComponent,
    BasicsMainComponent,
    AuthorsComponent,
    AuthorsListComponent,
    AuthorsDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BooksModule,
    /*UsersModule*/
    PipeModule,
    StoreModule.forRoot({authors:authorsReducer,selected:selectedReducer},{}) 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
