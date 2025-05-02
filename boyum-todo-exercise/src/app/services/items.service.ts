import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, Observable } from 'rxjs';
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

  url: string = 'https://boyumcodechallenge.azurewebsites.net/api/todolist';

  public getItems(): Observable<TodoItem[]> {
    const data = this.apiService.get<any>(this.url);
    const cachedResponse = this.cacheService.get(this.url);

    if (cachedResponse) {
      return cachedResponse;
    } else {
      data.subscribe((response) => {
        this.cacheService.set(this.url, response);
      });
      return data;
    }
  }

  // Since we are working with a single endpoint for all items, we will have to use the same endpoint and then filter the data for the specific item we want to get.
  // Ideally we would have a separate endpoint for fecthing a single item.
  public getItemById(id: number): Observable<TodoItem> {
    return this.apiService.get<any>(this.url).pipe(
      map((response) => response.find((item: TodoItem) => item.Id === id))
    );
  }
}
