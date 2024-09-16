import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookListComponent } from './basics/book-list/book-list.component';
import { BookDetailComponent } from './basics/book-detail/book-detail.component';
import { CalculatorComponent } from './basics/calculator/calculator.component';
import { BasicsMainComponent } from './basics/basics-main/basics-main.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    CalculatorComponent,
    BasicsMainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
