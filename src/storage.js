import { TodoItem } from "./todo_item";
import { Project } from "./project";

export function savetodo() {
    document.getElementById('saveBtn').addEventListener('click', () => {
        const content = document.getElementById('content');
        const project_name = content.getAttribute('project-name');
        const project = Project.load(project_name);
        const name = document.getElementById('todo_item').value;
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
}

export function createproject() {
    const new_project_btn = document.getElementById('new_project_btn');
    const new_project = document.getElementById('new_project');
    new_project_btn.addEventListener('click', () => {
        new_project.innerHTML = '';
        const new_project_name = document.createElement('input');
        const create_project_btn = document.createElement('button');

        const create_project_btn_text = document.createTextNode('Create Project!');
        create_project_btn.setAttribute('id', 'create_project_btn');
        create_project_btn.appendChild(create_project_btn_text);

        new_project_name.setAttribute('type', 'text');
        new_project_name.setAttribute('id', 'new_project_name');
        new_project_name.setAttribute('placeholder', 'Enter Project Name');

        new_project.appendChild(new_project_name);
        new_project.appendChild(create_project_btn);

        create_project_btn.addEventListener('click', () => {
            console.log('suces');
            const new_project_name = document.getElementById('new_project_name').value;
            const project_object = new Project(new_project_name);
            project_object.save();
        });
    });
}

export function delete_the_project(key) {
    const btn = document.getElementById('delete_project_btn');
    btn.addEventListener('click', () => {
        localStorage.removeItem(key);
        alert('Project Deleted');
    })
}