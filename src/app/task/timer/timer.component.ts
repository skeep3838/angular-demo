import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  time = 0;

  subscription!: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe({
      next: (time) => {
        console.log(time);
        this.time = time;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
