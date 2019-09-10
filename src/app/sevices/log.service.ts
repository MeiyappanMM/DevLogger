import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Components',
        date: new Date('09/09/2019 22:39:23')
      },
      {
        id: '2',
        text: 'added Bootstrap',
        date: new Date('07/09/2019 20:39:23')
      },
      {
        id: '3',
        text: 'Added logs Component',
        date: new Date('10/09/2019 13:19:23')
      },
    ]
   }
  getLogs():Log[]{
    return this.logs;
  }
  }
