import TodoStorage from "./TodoStorage";
import Todo from "../entities/ToDo";
import Inbox from "../entities/inbox";

class InboxStorage {
    /**
     * Creates an instance of an Inbox storage
     */
    constructor() {
        this.todoStorage = new TodoStorage();
        this.inbox = this.todoStorage.getInbox();
    }
    /**
     * Retrives all tasks
     * @returns All inbox tasks
     */
    getAllTasks() {
        return this.inbox.tasks;
    }
    /**
     * Add a task
     * @param {*} title  
     * @param {*} description 
     * @param {*} dueDate 
     * @param {*} priority 
     * @param {*} done 
     */
    addTask(title, description, dueDate, priority, done) {
        const id = `inbox-${this.inbox.tasks.length}`;
        const task = Todo(id, title, description, dueDate, priority, done);
        this.inbox.tasks.push(task);
        this.todoStorage.setInbox(this.inbox);
    }
    /**
     * Updates a task
     * @param {*} id 
     * @param {*} title 
     * @param {*} description 
     * @param {*} dueDate 
     * @param {*} priority 
     * @param {*} done 
     */
    updateTask(id, title, description, dueDate, priority, done) {
        for (let i = 0; i < this.inbox.tasks.length; i++) {
            if (this.inbox.tasks[i].id == id) {
                this.inbox.tasks[i] = Todo(id, title, description, dueDate, priority, done);
                break;
            }
        }

        this.todoStorage.setInbox(this.inbox);
    }
    /**
     * Removes a task
     * @param {*} id 
     */
    removeTask(id) {
        const tasks = this.getAllTasks().filter(item => item.id != id);
        this.inbox = Inbox(tasks);
        this.todoStorage.setInbox(this.inbox);
    }
}

export default InboxStorage;