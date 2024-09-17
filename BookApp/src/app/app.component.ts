import { Component } from '@angular/core';
import { PipeModule } from '../../../lib-workspace/dist/pipe-lib';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { setAuthors } from './reducers';
import { Author } from './entities/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BookApp';

  constructor(private http:HttpClient,private store:Store){}

  ngOnInit(){
    this.http.get<Author[]>("/api/authors").subscribe(authors => {
      console.log("Authors",authors);
      this.store.dispatch(setAuthors({authors}));
    })
  }

  routerActivate(ev:any){
    console.log("Router activate",ev);
  }
}
