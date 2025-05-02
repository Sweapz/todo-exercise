import { Component } from '@angular/core';
import { TodoItem } from '../../model/todo-item';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {
  constructor(private itemsService: ItemsService, private route: ActivatedRoute) { }

  item: TodoItem = {
    Id: 1,
    Name: 'Clean oven',
    Done: false,
    Expenses: 27980.3273,
    Created: 1617681792000
  };

  ngOnInit() {
    // const itemId = Number(this.route.snapshot.paramMap.get('id'));
   
    // this.itemsService.getItemById(itemId).subscribe((item) => {
    //   this.item = item;
    // });
  }
}
