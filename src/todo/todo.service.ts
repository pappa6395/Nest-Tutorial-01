import { Injectable } from '@nestjs/common';
import { Todo } from './create-todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
    todoArray: Todo[] = [];
    addTodo(title:string, subtitle:string) {
        console.log(`title: ${title}, subtitle: ${subtitle}`);
        const todo = new Todo();
        todo.id = uuidv4();
        todo.title = title;
        todo.subtitle = subtitle;
        this.todoArray.push(todo);

    }
    getTodos(): Todo[] {
        return this.todoArray;
    }
    removeTodoById(id:string) {
        const found = this.todoArray.find(todo => todo.id === id);
        if (!found) {
            throw new Error(`Todo ${id} not found`);
        }
        this.todoArray = this.todoArray.filter(todo => todo.id!== id);
        return this.todoArray
    }
}
