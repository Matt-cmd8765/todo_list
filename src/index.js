import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";
import { showproject } from "./display";

// ? Test message 
// let body = document.querySelector('body');
// let h1 = document.createElement('h1');
// let h1textnode = document.createTextNode('TO DO!');
// h1.appendChild(h1textnode);
// body.appendChild(h1);

// ! This is to test the logic. to be remove later. 
let item = new TodoItem('Milk Cow', 'Grab a teet and pull', new Date("2024-11-25"), 1);
let otheritem = new TodoItem('Collect Eggs', 'Pick up the eggs', new Date("2024-07-23"), 2);

let argh = [];
argh.push(item);

let project = new Project('TEST', argh);

project.addToArray(otheritem);
showproject(project);

console.log(project);
// ! This is to test the logic. to be remove later. 

