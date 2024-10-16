import { TodoItem } from "./todo_item";

export class Project {
    constructor(name, todo_list = []) {
        this.name = name;
        this.todo_list = todo_list;
    }

    addToArray(item) {
        this.todo_list.push(item);
    }

    // * to save the info
    save() {
        localStorage.setItem(this.name, JSON.stringify(this));
    }
    
    // * to load the objects
    static load(name) {
        const data = localStorage.getItem(name);
        if (data) {
            const projectData = JSON.parse(data);
            const project = new Project(projectData.name);
            project.todo_list = projectData.todo_list.map(item => new TodoItem(item.title, item.description, item.due_date, item.priority));
            return project;
        }
        return null;
    }
}