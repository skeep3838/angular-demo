import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'button[app-a]',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
