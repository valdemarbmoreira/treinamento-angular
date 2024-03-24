import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tt-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.less']
})
export class OutputComponent {
  @Output() mensagemEmitida: EventEmitter<string> = new EventEmitter<string>();

  enviarMensagem() {
    this.mensagemEmitida.emit('Mensagem emitida pela filho!');
  }
}
