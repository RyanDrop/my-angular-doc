import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  from,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Component({
  selector: 'mad-init-rxjs',
  templateUrl: './init-rxjs.component.html',
  styles: [],
})
export class InitRxjsComponent implements OnInit {
  obs = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  });

  behaviorSubject = new BehaviorSubject(4);
  replaySubject = new ReplaySubject(2, 100);
  subject = new Subject();

  numbers = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.obs.subscribe((x) => console.log(x));

    this.behaviorSubject.next(5);
    this.behaviorSubject.subscribe((x) => console.log(x));

    this.replaySubject.next(6);
    this.replaySubject.next(7);
    this.replaySubject.next(8);
    this.replaySubject.subscribe((x) => {
      console.log(x);

      setTimeout(() => {
        console.log(x);
      }, 2000);
    });

    this.subject.subscribe((x) => console.log('30s se passaram'));

    setTimeout(() => {
      this.subject.next(1);
    }, 30000);

    const functionOf = of(this.numbers);

    const functionFrom = from(this.numbers);

    console.log(functionOf.subscribe((x) => console.log(x)));
    console.log(functionFrom.subscribe((x) => console.log(x)));
  }
}
