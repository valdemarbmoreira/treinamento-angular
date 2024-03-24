import { Component } from '@angular/core';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'testApp';
  message='';

  mensagemEmitidaPeloFilho(value:string){
    this.message = value;
  }
}
