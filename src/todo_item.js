export class TodoItem {
    constructor(title, description, due_date, priority) {
        this.title = title;
        this.description = description;
        this.due_date = due_date;
        this.priority = priority;
    }

    
    // ? These may not be needed if always saving within the project object. Might delete
    // info() {
    //     console.log(`TODO: ${this.title} ## Description: ${this.description} ## Due Date: ${this.due_date} ## Priority: ${this.priority}`);
    // }

    // save() {
    //     localStorage.setItem(this.title, JSON.stringify(this));
    // }

    // static load(title) {
    //     const data = localStorage.getItem(title);
    //     return data ? JSON.parse(data) : null;
    // }
}