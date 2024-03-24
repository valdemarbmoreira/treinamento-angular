import { Component, Input } from '@angular/core';

@Component({
  selector: 'tt-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  @Input() contador: number = 0;

  incrementar() {
    this.contador++;
  }
}
