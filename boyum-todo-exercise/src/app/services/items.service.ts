import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { CacheService } from './cache.service';
import { TodoItem } from '../../model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(
    private apiService: ApiService,
    private cacheService: CacheService
  ) { }

  public getItems(url: string): Observable<TodoItem[]> {
    const data = this.apiService.get<any>(url);
    const cachedResponse = this.cacheService.get(url);

    if (cachedResponse) {
      return cachedResponse;
    } else {
      data.subscribe((response) => {
        this.cacheService.set(url, response);
      });
      return data;
    }
  }
}
