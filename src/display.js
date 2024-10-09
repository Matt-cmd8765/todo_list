export function showproject(project) {
    // * Get content div
    const cont = document.getElementById('content');
    const content = cont;

    // * Project name header
    const h2 = document.createElement('h2');
    const h2text = document.createTextNode(`Project Name: ${project.name}`);
    h2.appendChild(h2text);
    content.appendChild(h2);

    // * create list for todos
    const ul = document.createElement('ul');
    content.appendChild(ul);
    project.todo_list.forEach(todo => {
        const li = document.createElement('li');
        const litext = document.createTextNode(`${todo.title}`);
        const ul_todo_content = document.createElement('ul');
        const li_description = document.createElement('li');
        const li_date = document.createElement('li');
        const li_priority = document.createElement('li');
        const li_description_text = document.createTextNode(`${todo.description}`);
        const li_date_text = document.createTextNode(`${todo.due_date}`);
        const li_priority_text = document.createTextNode(`${todo.priority}`);
        li_description.appendChild(li_description_text);
        li_date.appendChild(li_date_text);
        li_priority.appendChild(li_priority_text);
        ul_todo_content.appendChild(li_description);
        ul_todo_content.appendChild(li_date);
        ul_todo_content.appendChild(li_priority);
        li.appendChild(litext);
        li.appendChild(ul_todo_content);
        ul.appendChild(li);
    });
}