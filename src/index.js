import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";
import { showproject } from "./display";

// const loadedProject = Project.load('TEST');
// showproject(loadedProject);

const newproject = new Project('Number 2');
newproject.save();

// * submit todo item
document.getElementById('saveBtn').addEventListener('click', () => {
    const name = document.getElementById('todo_name').value;
    const description = document.getElementById('todo_description').value;
    const date = document.getElementById('todo_date').value;
    const priority = document.getElementById('todo_priority').value;
    const newitem = new TodoItem(name, description, date, priority);
    loadedProject.addToArray(newitem);
    loadedProject.save();
    const reloadproject = Project.load('TEST');
    showproject(reloadproject);
    alert('todo saved!');
});

// * This makes a button for each project
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const btn = document.createElement('button');
    const btn_text = document.createTextNode(`${key}`);
    btn.appendChild(btn_text);
    const project_btn = document.getElementById('project_btn');
    project_btn.appendChild(btn);

    // * load on click
    btn.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        const loadProject = Project.load(`${key}`);
        showproject(loadProject);
    });
};