import { Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    { path: '', component: TodoListComponent },
    { path: 'item/:id', component: ItemDetailsComponent }
];
