import Inbox from "../entities/inbox";

class TodoStorage {

    /**
     * Creates an instance of TodoStorage
     */
    constructor() {
        // Get todo list
        var todo = localStorage.getItem("todoList");
        // instantiate inbox and projects
        this.inbox = Inbox();
        this.projects = [];

        if (todo != null) {                         // Read tasks if not null
            this.todoList = JSON.parse(todo);
            this.inbox = this.todoList.inbox;       // read inbox 
            this.projects = this.todoList.projects; // read projects
        }
    }
    /**
     * Gets the projects of the todo list
     * @returns Projects
     */
    getProjects() {
        return this.projects;
    }
    /**
     * Gets the inbox of the todo list.
     * @returns Inbox
     */
    getInbox() {
        return this.inbox;
    }
    /**
     * Saves todo list to local storage.
     * @param {*} todoList 
     */
    saveTodoList(todoList) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
        this.inbox = todoList.inbox;
        this.projects = todoList.projects;
    }
}
export default TodoStorage;