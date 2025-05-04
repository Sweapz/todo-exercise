import { Component } from '@angular/core';
import { TodoItem } from '../../model/todo-item';
import { ItemsService } from '../services/items.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { TagModule } from 'primeng/tag';
import { FieldsetModule } from 'primeng/fieldset';
import { UtilityService } from '../services/utility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [TagModule, FieldsetModule, CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent {
  constructor(private itemsService: ItemsService, private route: ActivatedRoute, public utilityService: UtilityService) { }

  item!: TodoItem;
  itemNotFound: boolean = false;

  ngOnInit() {
    const itemId = Number(this.route.snapshot.paramMap.get('id'));

    this.itemsService.getItemById(itemId).subscribe({
      next: (item) => {
        if (!item) {
          this.itemNotFound = true;
        }
        this.item = item;
      },
      error: (error) => {
        
        console.log(error);
      },
    });
  }

  public getDoneStatus() {
    return this.item.Done ? 'success' : 'danger';
  }

  public getDoneText() {
    return this.item.Done ? 'Task completed' : 'Task not yet completed';
  }

  public getAgeInDays(): string {
    const createdDate = new Date(this.item.Created);
    if (isNaN(createdDate.getTime())) {
      return 'Invalid date';
    }

    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - createdDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return `${differenceInDays} days`;
  }
}
