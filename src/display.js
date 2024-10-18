import { Project } from "./project";
import { savetodo } from "./storage";

// ! Divs to be referenced for all functions in this file
const content = document.getElementById('content');
const enter_todo = document.getElementById('enter_todo');

// * Display the project and todo lists.
export function showproject(project) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear previous content

    // Project name header
    const h2 = document.createElement('h2');
    const h2text = document.createTextNode(`Project Name: ${project.name}`);
    h2.appendChild(h2text);
    content.appendChild(h2);

    // Make delete project button
    const deleteProjectBtn = document.createElement('button');
    const deleteProjectText = document.createTextNode(`Delete ${project.name}`);
    deleteProjectBtn.appendChild(deleteProjectText);
    deleteProjectBtn.setAttribute('id', 'delete_project_btn');
    deleteProjectBtn.addEventListener('click', () => {
        localStorage.removeItem(project.name);
        alert(`Project ${project.name} deleted!`);
        content.innerHTML = ''; // Clear content after deletion
    });
    content.appendChild(deleteProjectBtn);

    // Create todo items with delete buttons
    project.todo_list.forEach((item, index) => {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.title} - ${item.description} - ${item.due_date} - ${item.priority}`;
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            project.deleteItem(index);
            showproject(project); // Re-render the project to reflect deletion
        });

        itemDiv.appendChild(deleteButton);
        content.appendChild(itemDiv);
    });
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

function enterToDo() {
    // * Create inputs
    const todo = document.createElement('input');
    const description = document.createElement('textarea');
    const date = document.createElement('input');
    const priority = document.createElement('input');

    // * set attributes
    todo.setAttribute('type', 'text');  
    todo.setAttribute('id', 'todo_item');
    todo.setAttribute('placeholder', 'Enter ToDo');

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