import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";
import { showproject, makeProjectBtn } from "./display";

// * Create a list of projects
makeProjectBtn();

// * submit todo item
document.getElementById('saveBtn').addEventListener('click', () => {
    const content = document.getElementById('content');
    const project_name = content.getAttribute('project-name');
    const project = Project.load(project_name);
    const name = document.getElementById('todo_name').value;
    const description = document.getElementById('todo_description').value;
    const date = document.getElementById('todo_date').value;
    const priority = document.getElementById('todo_priority').value;
    const newitem = new TodoItem(name, description, date, priority);
    project.addToArray(newitem);
    project.save();
    content.innerHTML = '';
    const loadproject = Project.load(project_name);
    showproject(loadproject);
    alert('todo saved!');
});
