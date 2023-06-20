export class Todo {
    constructor(date, title, notes, list, completed) {
        this.date = date;
        this.title = title;
        this.notes = notes;
        this.list = list;
        this.completed = completed ? true : false ;
    }

    getDate() {
        return this.date;
    }

    getTitle() {
        return this.title;
    }

    getNotes() {
        return this.notes;
    }

    getList () {
        return this.list;
    }

    getCompleted() {
        return this.completed;
    }

    setDate(date) {
        this.date = date;
    }

    setTitle() {
        this.title = title;
    }

    setNotes(notes) {
        this.notes = notes;
    }

    setList (list) {
        this.list = list;
    }
    
    setComplete() {
        if (this.completed) {
            this.completed = false;
        } else {
            this.completed = true;
        }
    }
}