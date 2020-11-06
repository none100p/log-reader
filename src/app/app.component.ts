import {Component, OnInit} from '@angular/core';
import {log} from '../assets/log';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'log-reader';
  result: Map<string, number>;
  total = 0;
  asd: string = 'sdjkfndsffg';

  constructor() {
    this.parse();
  }

  parse(): void {
    this.asd = 1233;
    const splitLog = log.split('\n');
    this.result = new Map();
    let splitLine;

    splitLog.forEach(line => {
      splitLine = line.split(':');
      if (splitLine.length > 1) {
        const current = parseInt(splitLine[1], 10);
        this.result.set(splitLine[0], (this.result.get(splitLine[0]) | 0) + current);
        this.total += current;
      }
    });
    console.log(this.result);
  }
}
