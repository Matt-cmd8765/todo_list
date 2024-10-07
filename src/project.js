export function Project(name, todo_list = []) {
    // Make sure todo_list is an array
    this.name = name;
    this.todo_list = todo_list;

    // Method to add an item to the todo_list
    this.addToArray = function(item) {
        this.todo_list.push(item);
    };
}