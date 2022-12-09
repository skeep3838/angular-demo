import { FontSizeService } from './../service/font-size.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ch6-service',
  templateUrl: './ch6-service.component.html',
  styleUrls: ['./ch6-service.component.css']
})
export class Ch6ServiceComponent {

  constructor(
    public fontSizeService: FontSizeService
  ) { }

  onSetFontSize(value: number): void{
    this.fontSizeService.size += value;
  }

}
