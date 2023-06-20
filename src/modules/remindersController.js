import All from "./all";
import { Todo } from "./todo.js";
import { List } from "./list.js";
import { DisplayController } from "./displayController.js";

export default class RemindersController {
  constructor() {
    this.all = new All();
  }

  getAll() {
    this.loadData();
    return this.all;
  }

  // load data aka starting game
  loadData() {
    const data = localStorage.getItem("Reminders");
    if (data) {
      const parsedData = JSON.parse(data);

      const all = new All();

      parsedData.lists.forEach((listData) => {
        const list = new List(listData.name);

        listData.todos.forEach((todoData) => {
          const todo = new Todo(
            todoData.date,
            todoData.title,
            todoData.notes,
            todoData.list,
            todoData.completed
          );

          list.addTodo(todo);
        });

        all.addList(list);
      });
      this.all = all
    } else {
      // load data and see if data is working
      // if not load random data

      // set all to data
      const loadAll = new All();
      for (let i = 0; i < 1; i++) {
        const list = new List(`Reminders`);

        const todo = new Todo(
          "06/13/2023",
          `today`,
          "random",
          list.getName(),
          true
        );
        list.addTodo(todo);
        const todo1 = new Todo("06/15/2023", `game`, "random", list.getName());
        const todo2 = new Todo("", `today`, "random", list.getName());
        list.addTodo(todo2);
        for (let j = 0; j < 2; j++) {
          const todo = new Todo(
            "12/17/2016",
            `todo ${j}`,
            "random",
            list.getName()
          );
          list.addTodo(todo);
        }
        loadAll.addList(list);

        const list2 = new List("Gym");
        loadAll.addList(list2);
      }
      this.all = loadAll;
    }
  }

  saveData() {
    // just save current all to the database
    localStorage["Reminders"] = JSON.stringify(this.all);
  }

  createList() {
    const curList = new List("New List");
    this.all.addList(curList);
    this.saveData();
  }

  removeList(listName) {
    this.all.removeList(listName);
    this.saveData();
  }

  createTodo(listName, date, title, notes) {
    const curList = this.all.getList(listName);
    const curTodo = new Todo(date, title, notes, listName);
    curList.addTodo(curTodo);
    this.saveData();
  }

  removeTodo(listName, title, notes, date) {
    const curList = this.all.getList(listName);
    curList.removeTodo(title, notes, date);
    this.saveData();
  }

  updateList(listName, title) {
    const curList = this.all.getList(listName);
    curList.setName(title);
    this.saveData();
  }

  completeTodo(listName, todoTitle, notes, date) {
    const curList = this.all.getList(listName);
    const curTodo = curList.getTodo(todoTitle, notes, date);
    curTodo.setComplete();
    this.saveData();
    console.log(this.all);
    console.log(localStorage["Reminders"]);
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
