import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";
import { showproject } from "./display";

const loadedProject = Project.load('TEST');
showproject(loadedProject);
console.log(loadedProject);

document.getElementById('saveBtn').addEventListener('click', () => {
    const name = document.getElementById('todo_name').value;
    const description = document.getElementById('todo_description').value;
    const date = document.getElementById('todo_date').value;
    const priority = document.getElementById('todo_priority').value;
    const newitem = new TodoItem(name, description, date, priority);
    loadedProject.addToArray(newitem);
    loadedProject.save();
    localStorage.setItem('TEST', JSON.stringify(loadedProject));
    const reloadproject = Project.load('TEST');
    showproject(reloadproject);
    alert('todo saved!');
});


// ! This is to test the logic. to be remove later. 
// let item = new TodoItem('Milk Cow', 'Grab a teet and pull', "2024-11-25", 'high');
// // let otheritem = new TodoItem('Collect Eggs', 'Pick up the eggs', "2024-07-23", 'medium');

// project.addToArray(item);
// // project.addToArray(otheritem);
// project.save();

// const loadedProject = Project.load('TEST');
// // * to display the project. 
// showproject(loadedProject);

// ! This is to test the logic. to be remove later. 

