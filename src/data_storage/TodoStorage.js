import Inbox from "../entities/inbox";
import TodoList from "../entities/todoList";

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
    setInbox(inbox) {
        this.inbox = inbox;
        this.commit();
    }
    setProjects(projects) {
        this.projects = projects;
        this.commit();
    }
    /**
     * Commits the changes in the storages
     */
    commit() {
        const todoList = TodoList(this.inbox, this.projects);
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
}
export default TodoStorage;