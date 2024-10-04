import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";

// ? Test message 
let body = document.querySelector('body');
let h1 = document.createElement('h1');
let h1textnode = document.createTextNode('TO DO!');
h1.appendChild(h1textnode);
body.appendChild(h1);

let item = new TodoItem('Milk Cow', 'Grab a teet and pull', '05/10/2024', 1);

let project = new Project(item);

console.log(project);
console.log(project.todo_list.info());