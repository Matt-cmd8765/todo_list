import "./style.css";


// ? Test message 
let body = document.querySelector('body');
let h1 = document.createElement('h1');
let h1textnode = document.createTextNode('CUNT!');
h1.appendChild(h1textnode);
body.appendChild(h1);