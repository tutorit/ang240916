import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { BasicsMainComponent } from './basics/basics-main/basics-main.component';
import { CalculatorComponent } from './basics/calculator/calculator.component';
import { BookListComponent } from './basics/book-list/book-list.component';
import { BookDetailComponent } from './basics/book-detail/book-detail.component';

const routes:Routes=[
  {path:'',component:BasicsMainComponent},
  {path:'calc',component:CalculatorComponent},
  {path:'books',component:BookListComponent},
  {path:'books/:id',component:BookDetailComponent},
]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)    
  ],
})
export class AppRoutingModule { }
