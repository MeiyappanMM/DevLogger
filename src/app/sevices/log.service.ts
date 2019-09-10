import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];
  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null, date: null
  });
  selectedLog = this.logSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.logs = [];
  }
  getLogs(): Observable<Log[]> {
    if (localStorage.getItem('logs') === null){
      this.logs = [];
    }
    else{
      this.logs = JSON.parse(localStorage.getItem('logs'));
    }
    return of(this.logs);
      
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);

    //Add to local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));

  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    // this.logs = this.logs.filter(obj => {
    //   return obj !== log;
    // });
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState() {
    this.stateSource.next(true);
  }

}
