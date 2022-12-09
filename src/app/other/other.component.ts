import { Component, OnInit } from '@angular/core';
import { FontSizeService } from '../service/font-size.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor(
    public fontSizeService: FontSizeService
  ) { }

  ngOnInit(): void {
  }

}
