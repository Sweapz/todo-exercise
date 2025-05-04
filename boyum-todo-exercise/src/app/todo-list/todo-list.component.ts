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
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, ButtonModule, CommonModule, DividerModule, CheckboxModule, DialogModule, InputTextModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  constructor(private itemsService: ItemsService, private router: Router, public utilityService: UtilityService) { }

  newItemName: string = '';
  newItemDescription: string = '';
  newItemExpense!: number | null;
  showDialog: boolean = false;
  items!: TodoItem[];

  ngOnInit() {
    this.itemsService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  public itemClicked(item: TodoItem) {
    this.router.navigate(['/item', item.Id]);
  }

  public saveAddition() {
    const newItem: TodoItem = {
      Id: this.items.length + 1, // Assuming Id is auto-incremented and list is sorted by Id - ideally should be handled by the backend
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
    this.newItemExpense = null;
  }
}
