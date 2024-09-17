import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeModule } from 'pipe-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PipeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestApp';
}
 