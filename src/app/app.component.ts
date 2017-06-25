import { Component } from '@angular/core';
import {GameStatus} from './game-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  gameStatus: GameStatus = GameStatus.Default;

  numbers = [];

  onGameStarted(firedNumber) {
    this.gameStatus = GameStatus.Running;
    this.numbers.push(firedNumber);
  }

  onGameStopped() {
    this.gameStatus = GameStatus.Stopped;
  }

  gameIsStopped() {
    return this.gameStatus === GameStatus.Stopped;
  }
}
