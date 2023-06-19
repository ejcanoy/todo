export class List {
    constructor (name) {
        this.name = name;
        this.todos = [];
    }

    getName() {
        return this.name;
    }

    getTodos() {
        return this.todos;
    }

    getTodo(name, notes, date) {
        return this.todos.indexOf(name) === -1 ? -1 : todos[name];
    }

    setName(name) {
        this.name = name;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoTitle, notes, date) {
        this.todos = this.todos.filter(todo => !(todo.title === todoTitle && todo.notes === notes && todo.date === date));
    }
}

