import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-component',
  templateUrl: './game-component.component.html',
  styleUrls: ['./game-component.component.css']
})
export class GameComponentComponent implements OnInit {

  lastEmittedNumber = 0;

  @Output('GameStarted') GameStartedEvent = new EventEmitter<number>();
  @Output('GameStopped') GameStoppedEvent  = new EventEmitter();

  private intervalId;

  constructor() {

  }



  ngOnInit() {
  }

  onStartGame()
  {
    this.intervalId = setInterval(() => {
      this.lastEmittedNumber++;
      this.GameStartedEvent.emit(this.lastEmittedNumber);

      }, 1000);
  }

  onStopGame()
  {
    clearInterval(this.intervalId);
    this.GameStoppedEvent.emit();

  }

}
