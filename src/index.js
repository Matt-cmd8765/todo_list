import "./style.css";
import { TodoItem } from "./todo_item";
import { Project } from "./project";
import { showproject } from "./display";

// ! This is to test the logic. to be remove later. 
let project = new Project('TEST');
let item = new TodoItem('Milk Cow', 'Grab a teet and pull', "2024-11-25", 'high');
let otheritem = new TodoItem('Collect Eggs', 'Pick up the eggs', "2024-07-23", 'medium');

project.addToArray(item);
project.addToArray(otheritem);
project.save();

const loadedProject = Project.load('TEST');

// * to display the project. 
showproject(loadedProject);

// ! This is to test the logic. to be remove later. 

