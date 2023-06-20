import { List } from "./list.js";
import { Todo } from "./todo.js";

export default class All {
  constructor() {
    this.lists = [];
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
