// create a todo
    // add to storage
    // add to object or load object again?
export default class dataAccessLayer {
    constructor() {
        const data = null;        
    }

    loadData() {
        data = localStorage.getItem('Reminders');
    }

    sendData(all) {
        // load all into the database
        // data gets set to null
    }

    getData() {
        return data;
    }
}