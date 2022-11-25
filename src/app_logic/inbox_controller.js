import InboxStorage from "../data_storage/InboxStorage";

class InboxController {
    constructor() {
        this.operation = "view";
        this.editID = "";
        this.inboxStorage = new InboxStorage();
    }
    getAllTasks() {
        return this.inboxStorage.getAllTasks();
    }
    addTask(title, description, dueDate, priority, done) {
        this.inboxStorage.addTask(title, description, dueDate, priority, done);
    }
    updateTask(id, title, description, dueDate, priority, done) {
        this.inboxStorage.updateTask(id, title, description, dueDate, priority, done);
    }
    removeTask(task) {
        this.inboxStorage.removeTask(task.id);
    }

}
export default InboxController;
