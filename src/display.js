import { Project } from "./project";
import { savetodo } from "./storage";
import { delete_the_project } from "./storage";

// ! Divs to be referenced for all functions in this file
const content = document.getElementById('content');
const enter_todo = document.getElementById('enter_todo');

// * Display the project and todo lists.
export function showproject(project) {
    // * Project name header
    const h2 = document.createElement('h2');
    const h2text = document.createTextNode(`Project Name: ${project.name}`);
    h2.appendChild(h2text);
    content.appendChild(h2);

    // * Make delete button
    const delete_project = document.createElement('button');
    const delete_project_text = document.createTextNode(`Delete ${project.name}`);
    delete_project.appendChild(delete_project_text);
    delete_project.setAttribute('id', 'delete_project_btn');
    content.appendChild(delete_project);

    // * Event listener for delete button
    delete_the_project(`${project.name}`);

    // * load todo list
    todolist(project);
}

// * This makes a button for each project
export function makeProjectBtn() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        const btn = document.createElement('button');
        const btn_text = document.createTextNode(`${key}`);
        btn.appendChild(btn_text);
        const project_btn = document.getElementById('project_btn');
        project_btn.appendChild(btn);

        // * load on click
        btn.addEventListener('click', () => {
            content.setAttribute('project-name', `${key}`);
            content.innerHTML = '';
            enter_todo.innerHTML = '';
            const loadProject = Project.load(`${key}`);
            enterToDo();
            saveBtn();
            savetodo();
            showproject(loadProject);
        });
    };
}

export function newProject() {
    const new_project_btn = document.getElementById('new_project_btn');
    const new_project = document.getElementById('new_project');
    new_project_btn.addEventListener('click', () => {
        const new_project_name = document.createElement('input');
        new_project_name.setAttribute('type', 'text');
        new_project_name.setAttribute('placeholder', 'Enter Project Name');
        new_project.appendChild(new_project_name);
    });
};

// * show list of todos
function todolist(project) {
    const ul = document.createElement('ul');
    content.appendChild(ul);
    project.todo_list.forEach(todo => {
        const li = document.createElement('li');
        const litext = document.createTextNode(`${todo.title}`);
        
        const ul_todo_content = document.createElement('ul');
        const li_description = document.createElement('li');
        const li_date = document.createElement('li');
        const li_priority = document.createElement('li');
        const delete_btn = document.createElement('button');
        const li_description_text = document.createTextNode(`${todo.description}`);
        const li_date_text = document.createTextNode(`${todo.due_date}`);
        const li_priority_text = document.createTextNode(`${todo.priority}`);
        const delete_btn_text = document.createTextNode('Delete ToDo');
        li_description.appendChild(li_description_text);
        li_date.appendChild(li_date_text);
        li_priority.appendChild(li_priority_text);
        ul_todo_content.appendChild(li_description);
        ul_todo_content.appendChild(li_date);
        ul_todo_content.appendChild(li_priority);
        delete_btn.appendChild(delete_btn_text);
        li.appendChild(litext);
        li.appendChild(ul_todo_content);
        ul.appendChild(li);
    });
}

function enterToDo() {
    // * Create inputs
    const todo = document.createElement('input');
    const description = document.createElement('input');
    const date = document.createElement('input');
    const priority = document.createElement('input');

    // * set attributes
    todo.setAttribute('type', 'text');  
    todo.setAttribute('id', 'todo_item');
    todo.setAttribute('placeholder', 'Enter ToDo');

    description.setAttribute('type', 'textarea');
    description.setAttribute('id', 'todo_description');
    description.setAttribute('placeholder', 'Enter Description');

    date.setAttribute('type', 'date');
    date.setAttribute('id', 'todo_date');

    priority.setAttribute('type', 'number');
    priority.setAttribute('id', 'todo_priority');
    priority.setAttribute('placeholder', 'Enter priority');

    // * append to div
    enter_todo.appendChild(todo);
    enter_todo.appendChild(description);
    enter_todo.appendChild(date);
    enter_todo.appendChild(priority);
}

function saveBtn() {
    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('id', 'saveBtn');
    let saveBtntext = document.createTextNode('Save ToDo');
    saveBtn.appendChild(saveBtntext);
    enter_todo.appendChild(saveBtn);
}