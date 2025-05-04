import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() { }

  public getFormattedCreatedDate(epochTime: number): string {
    const date = new Date(epochTime);
    return isNaN(date.getTime()) ? 'Invalid date' : date.toLocaleDateString();
  }
}
