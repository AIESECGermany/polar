import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }

  transformDate(date: any): string {
    let transformedDate = DateTime.fromISO(date);
    return transformedDate.toLocal().toLocaleString(DateTime.DATE_MED);
  }

  transformDateAndTime(date: any): string {
    let transformedDate = DateTime.fromISO(date);
    return transformedDate.toLocal().toLocaleString(DateTime.DATETIME_MED);
  }
}
