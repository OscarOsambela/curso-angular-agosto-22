import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component implements OnInit {
  @Input() usuario: string = 'Franz'
  constructor() { }

  ngOnInit(): void {
  }

}
