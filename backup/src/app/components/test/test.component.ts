import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit{
  public name: string = 'teste';


  constructor(){}

  ngOnInit(): void {

  }


}
