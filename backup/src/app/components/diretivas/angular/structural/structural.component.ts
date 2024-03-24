import { Component } from '@angular/core';

@Component({
  selector: 'tt-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.less']
})
export class StructuralComponent {

  public showM: boolean = false;

  public users = [
    { name: 'João', email: 'joao@example.com' },
    { name: 'Maria', email: 'maria@example.com' },
    { name: 'Pedro', email: 'pedro@example.com' },
    { name: 'Ana', email: 'ana@example.com' },
    { name: 'Carlos', email: 'carlos@example.com' }
  ];

  choice: string = '';

  changeChoice(option: string) {
    this.choice = option;
  }

  public showMessage(){
    this.showM = !this.showM;
  }
}
