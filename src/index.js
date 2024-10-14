import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";
import { showproject, makeProjectBtn } from "./display";

// * Create a list of projects
makeProjectBtn();

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