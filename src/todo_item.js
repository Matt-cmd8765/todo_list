
export function TodoItem (title, description, due_date, priority) {
    this.title = title;
    this.description = description;
    this.due_date = due_date;
    this.priority = priority;

    this.info = function() {
        console.log(`TODO: ${title} ## Description: ${description} ## Due Date: ${due_date} ## Priority: ${priority}`)
    }
}


