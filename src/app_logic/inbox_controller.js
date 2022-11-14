import TodoList from "../entities/todoList";
import Todo from "../entities/ToDo";
import TodoStorage from "../data_storage/todo_storage";

class InboxController {
    constructor() {

    }
    getInbox() {
        return TodoStorage.getInbox();
    }
    getAllProjects() {
        return TodoStorage.getProjects();
    }
    saveToStorage(todoList) {
        return TodoStorage.save(todoList);
    }
    updateInbox() {
        const inboxToDo = this.getInbox();
        const projects = this.getAllProjects();

        const inbox = document.querySelector("#inbox");
        if (inbox) {
            inbox.innerHTML = ``;
            inboxToDo.tasks.forEach(element => {
                const task = document.createElement("div");
                task.id = element.id;
                inbox.appendChild(task);

                const checkbox = document.createElement("input")
                checkbox.setAttribute("type", "checkbox");
                checkbox.id = `${element.id}-checkbox}`;
                checkbox.checked = element.done;
                task.appendChild(checkbox);
                checkbox.addEventListener('click', (event) => {
                    element.done = event.target.checked;
                    const todoList = TodoList(inboxToDo, projects);
                    this.saveToStorage(todoList);
                    this.updateInbox();
                })

                const title = document.createElement("label");
                title.setAttribute("for", checkbox.id);
                title.innerHTML = `
                    <div class="task-title">${element.title}</div>
                    <div class="element-description">${element.description}</div>`;
                task.appendChild(title)

                const priorityColor = document.createElement("span")
                priorityColor.id = "priority-color";
                priorityColor.className = element.priority;
                task.appendChild(priorityColor);

                const editButton = document.createElement("button");
                editButton.id = `${element.id}-edit-button`;
                editButton.innerText = "Edit";
                task.appendChild(editButton);

                const deleteButton = document.createElement("button");
                deleteButton.id = `${element.id}-delete-button`;
                deleteButton.innerText = "Delete";
                task.appendChild(deleteButton);

                deleteButton.addEventListener("click", (event) => {
                    inboxToDo.tasks.pop(element);
                    const todoList = TodoList(inboxToDo, projects);
                    this.saveToStorage(todoList);
                    this.updateInbox();
                });
            });
        }
    }
    addInboxTask(title, description, dueDate, priority, done) {
        const inboxToDo = this.getInbox();
        const projects = this.getAllProjects();
        const id = `inbox-${inboxToDo.tasks.length}`;
        const task = Todo(id, title, description, dueDate, priority, done);
        inboxToDo.tasks.push(task);
        const todoList = TodoList(inboxToDo, projects);
        this.saveToStorage(todoList);
        this.updateInbox();
    }
}
export default InboxController;
