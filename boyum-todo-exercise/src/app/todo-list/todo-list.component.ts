import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsService } from '../services/items.service';
import { TodoItem } from '../../model/todo-item';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, ButtonModule, CommonModule, DividerModule, CheckboxModule, DialogModule, InputTextModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  constructor(private itemsService: ItemsService, private router: Router) { }

  newItemName: string = '';
  newItemDescription: string = '';
  showDialog: boolean = false;
  items: TodoItem[] = [
    {
      Id: 1,
      Name: 'Clean oven',
      Done: false,
      Expenses: 27980.3273,
      Created: 1617681792000
    },
    {
      Id: 2,
      Name: 'Mowing the lawn',
      Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis cursus tortor, ut tincidunt metus placerat in. Mauris magna purus, ornare id lorem ac, malesuada viverra eros. Sed sed cursus purus, interdum lacinia erat. Phasellus massa felis, molestie id rhoncus ut, dapibus at magna.',
      Done: false,
      Expenses: 2,
      Created: 1618481792000
    },
    {
      Id: 3,
      Name: 'Repair gate',
      Description: 'Aenean pellentesque neque et turpis fermentum vehicula. Mauris eu lacus porttitor, ultrices massa vel, maximus purus. Donec id feugiat nulla, nec ullamcorper dui. Donec ac luctus augue. Maecenas nec est eget justo finibus tempor ut id sem. Sed eget diam consectetur, vestibulum nisi sed, pellentesque lectus.',
      Done: true,
      Expenses: 10.4,
      Created: 15184819988792000
    },
    {
      Id: 4,
      Name: 'Wash car',
      Description: 'Vestibulum ac mauris pulvinar, eleifend justo pharetra, ultricies elit. Mauris quis mauris magna. Sed fringilla luctus arcu sit amet tristique. Nulla sit amet nibh et metus suscipit porttitor. Nunc a vulputate tellus. Pellentesque congue mauris vitae urna commodo feugiat. Praesent ac sem ac leo malesuada accumsan tempor sit amet velit. Donec porta dignissim est facilisis accumsan. Nam at pellentesque purus, eget imperdiet mi. Proin purus metus, vulputate sed libero et, accumsan tincidunt eros. Ut eu gravida nulla. Pellentesque sit amet congue magna.',
      Done: false,
      Expenses: 145002.94,
      Created: 15184819988792000
    },
    {
      Id: 5,
      Name: 'Make pickles',
      Description: 'Maecenas nec orci non orci cursus aliquam vitae nec mi. Nulla scelerisque, est vel ornare luctus, magna sem suscipit ligula, et laoreet velit lacus vel velit.',
      Done: true,
      Expenses: 0,
      Created: 1612481792000
    },
    {
      Id: 6,
      Name: 'Construct fermentor',
      Description: 'Maecenas sit amet dolor pharetra, congue orci et, vehicula nisl. Aenean fermentum lacus velit, vel vulputate odio ornare vitae. Nullam neque ligula, tincidunt id felis sit amet, vulputate bibendum libero.',
      Done: false,
      Expenses: 1337.666,
      Created: 1615481792000
    }
  ];

  ngOnInit() {
    // this.itemsService.getItems().subscribe({
    //   next: (data) => {
    //     this.items = data;
    //     console.log(this.items);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  public itemClicked(item: TodoItem) {
    this.router.navigate(['/item', item.Id]);
  }

  public saveAddition() {
    const newItem: TodoItem = {
      Id: this.items.length + 1, // Assuming Id is auto-incremented and list is sorted by Id - ideeally should be handled by the backend
      Name: this.newItemName,
      Description: this.newItemDescription,
      Done: false,
      Expenses: 0,
      Created: Date.now()
    };

    this.items.push(newItem);
    this.clearDialog();
  }

  public clearDialog() {
    this.showDialog = false;
    this.newItemName = '';
    this.newItemDescription = '';
  }
}
