import { Component } from '@angular/core';

@Component({
  selector: 'tt-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.less']
})
export class AttributeComponent {

  public enabled: boolean = false;
  public colorText: string = 'red';
  public fontSize: number = 50;


  actionButton(){
    this.enabled = !this.enabled;
    this.colorText = this.enabled ? 'green' :'red';
    this.fontSize = this.enabled ? 20 :50;
  }
}
