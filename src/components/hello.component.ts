import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [NgIf],
  template: `
      <p>Hello from Angular!!: {{ helpText }}</p>
      <button (click)="toggle()">Toggle <p *ngIf="show">You did it</p> </button>
  `,
})
export class HelloComponent {
  @Input() helpText = 'no binding just default';

  show = false;

  toggle() {
    this.show = !this.show;
  }
}