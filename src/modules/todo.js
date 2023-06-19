export class Todo {
    constructor(date, title, notes, list) {
        this.date = date;
        this.title = title;
        this.notes = notes;
        this.list = list;
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
}