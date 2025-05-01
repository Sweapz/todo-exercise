import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: Map<string, any> = new Map<string, any>();
  
  constructor() { }

  public get(key: string): Observable<any> | null {
    return this.cache.get(key) ? of(this.cache.get(key)) : null;
  }

  public set(key: string, value: any): void {
    this.cache.set(key, value);
  }
}
