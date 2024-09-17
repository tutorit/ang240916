import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../../entities/author';
import { Store } from '@ngrx/store';
import { authorsSelector, setSelected } from '../../reducers';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrl: './authors-list.component.css'
})
export class AuthorsListComponent {
  public authors:Observable<Author[]> | undefined;

  constructor(public store:Store<{authors:ReadonlyArray<Author>}>){
    console.log("State",store)
    this.authors=store.select(authorsSelector);
  }

  selected(author:Author){
    this.store.dispatch(setSelected({selected:author}));    
  }
}
