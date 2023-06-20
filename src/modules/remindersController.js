 
import All from './all';
import { Todo } from './todo.js';
import { List } from './list.js';
import { DisplayController } from './displayController.js';

export default class RemindersController {
    constructor() {
        this.all = new All();
    }

    getAll() {
        return this.all;
    }

    // load data aka starting game
    loadData() {
        const data = localStorage.getItem('Reminders');
        console.log(data);
        // load data and see if data is working
            // if not load random data
        
        // set all to data
    }    

    saveData() {
        // just save current all to the database
    }

    createList() {
        const curList = new List('New List');
        this.all.addList(curList);
    }

    removeList(listName) {
        this.all.removeList(listName);
    }

    createTodo(listName, date, title, notes) {
        const curList = this.all.getList(listName);
        const curTodo = new Todo(date, title, notes, listName);
        curList.addTodo(curTodo);
    }

    removeTodo(listName, title, notes, date) {
        const curList = this.all.getList(listName);
        curList.removeTodo(title, notes, date);
    }

    updateList(listName, title) {
        const curList = this.all.getList(listName);
        curList.setName(title);
    }

    completeTodo(listName, todoTitle, notes, date) {
        const curList = this.all.getList(listName);
        const curTodo = curList.getTodo(todoTitle, notes, date);
        curTodo.setComplete();
    }
}

// const testReminders = new RemindersController();
// testReminders.loadData();

// for (let i = 0; i < 1; i++) {
//     const list = new List(`Reminders`);

//     const todo = new Todo("06/13/2023", `today`, "random", list.getName());
//     list.addTodo(todo);
//     const todo1 = new Todo("06/15/2023", `game`, "random", list.getName());
//     const todo2 = new Todo("", `today`, "random", list.getName());
//     list.addTodo(todo2);
//     for (let j = 0; j < 2; j++) {
//       const todo = new Todo(
//         "12/17/2016",
//         `todo ${j}`,
//         "random",
//         list.getName()
//       );
//       list.addTodo(todo);
//     }
//     this.addList(list);

//     const list2 = new List("Gym");
//     const todo3 = new Todo("06/13/2023", `Gym`, "random", list2.getName());
//     list2.addTodo(todo3);
//     this.addList(list2);
//   }