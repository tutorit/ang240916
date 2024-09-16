import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferredComponent } from './deferred/deferred.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DeferredComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp';

  public showDeferred=false;
}
