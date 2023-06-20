import { List } from "./list.js";
import { Todo } from "./todo.js";

export default class All {
  constructor() {
    this.lists = [];
    for (let i = 0; i < 1; i++) {
      const list = new List(`Reminders`);

      const todo = new Todo("06/13/2023", `today`, "random", list.getName(), true);
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
      this.addList(list);

      const list2 = new List("Gym");
      this.addList(list2);
    }
  }

  addList(list) {
    this.lists.push(list);
  }

  removeList(listName) {
    this.lists = this.lists.filter((list) => list.getName() !== listName);
  }

  getLists() {
    return this.lists;
  }

  getList(listName) {
    return this.lists.find((list) => list.name === listName);
  }
}
