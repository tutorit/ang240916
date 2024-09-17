import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferredComponent } from './deferred/deferred.component';
import { FormsModule } from '@angular/forms';
import {PipeModule} from '../../../lib-workspace/dist/pipe-lib'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DeferredComponent,FormsModule,PipeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp';

  public showDeferred=false;
}
