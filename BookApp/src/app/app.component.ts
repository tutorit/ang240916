import { Component } from '@angular/core';
import { PipeModule } from '../../../lib-workspace/dist/pipe-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BookApp';

  routerActivate(ev:any){
    console.log("Router activate",ev);
  }
}
