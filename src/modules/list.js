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
        return this.todos.find((todo) => {
            return (
              todo.date === date &&
              todo.title === name &&
              todo.notes === notes
            );
          });
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

