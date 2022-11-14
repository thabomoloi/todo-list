import TodoList from "../entities/todoList";
import Todo from "../entities/ToDo";
import TodoStorage from "../data_storage/todo_storage";
import Inbox from "../entities/inbox";
import { format } from "date-fns";
class InboxController {
    constructor() {

    }
    removeInbox(task) {
        const tasks = this.getInbox().tasks.filter(item => item.id != task.id);
        for (let i = 0; i < task.length; i++)
            tasks[i].id = `inbox-${i}`;
        const projects = this.getAllProjects();
        const todoList = TodoList(Inbox(tasks), projects);
        this.saveToStorage(todoList);
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
        if (inbox && inboxToDo.tasks) {
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
                checkbox.style.backgroundImage = (checkbox.checked) ? `url("../dist/images/check-solid.svg")` : "none";

                checkbox.addEventListener('click', (event) => {
                    element.done = event.target.checked;
                    const todoList = TodoList(inboxToDo, projects);
                    this.saveToStorage(todoList);
                    this.updateInbox();
                })

                const title = document.createElement("label");
                title.setAttribute("for", checkbox.id);
                title.innerHTML = `<strong>${element.title}</strong>`;
                task.appendChild(title)

                const priorityColor = document.createElement("span")
                priorityColor.classList.add("priority-color", element.priority);
                task.appendChild(priorityColor);

                const date_label = document.createElement("span");
                date_label.classList.add("task-due-date");
                date_label.innerText = format(Date.parse(element.dueDate), "d MMM yyyy");
                task.append(date_label);

                const editButton = document.createElement("button");
                editButton.id = `${element.id}-edit-button`;
                editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
                task.appendChild(editButton);

                const deleteButton = document.createElement("button");
                deleteButton.id = `${element.id}-delete-button`;
                deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
                task.appendChild(deleteButton);

                deleteButton.addEventListener("click", (event) => {
                    this.removeInbox(element);
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
