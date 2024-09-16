import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deferred',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deferred.component.html',
  styleUrl: './deferred.component.css'
})
export class DeferredComponent {
  @Input() public show:boolean=true;
}
