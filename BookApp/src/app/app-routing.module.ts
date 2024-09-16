import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { BasicsMainComponent } from './basics/basics-main/basics-main.component';
import { CalculatorComponent } from './basics/calculator/calculator.component';
import { BookListComponent } from './basics/book-list/book-list.component';
import { BookDetailComponent } from './basics/book-detail/book-detail.component';
import { activateGuardGuard } from './basics/activate-guard.guard';
import { dirtyGuard } from './basics/dirty.guard';

const routes:Routes=[
  {path:'',component:BasicsMainComponent,canActivate:[activateGuardGuard]},
  {path:'calc',component:CalculatorComponent},
  {path:'books',title:"Kirjalista",component:BookListComponent},
  {path:'books/:id',component:BookDetailComponent,canDeactivate:[dirtyGuard]},
]

@NgModule({
  declarations: [],
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes,{useHash:false})    
  ],
  providers:[
    provideRouter(routes,withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
