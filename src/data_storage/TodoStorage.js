import Inbox from "../entities/inbox";

class TodoStorage {

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
    
}