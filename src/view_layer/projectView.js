import ProjectController from "../app_logic/project_controller";
import { format, compareAsc } from "date-fns";
import TodoList from "../entities/todoList";
import TaskForm from "./task_form";

class ProjectView {

    /**
     * Creates project view
     * @param {ProjectController} projectController 
     * @param {TaskForm} taskForm
     */
    constructor(projectID, projectController, taskForm) {
        this.projectID = projectID;
        this.projectController = projectController;
        this.project = this.projectController.getProject();
        this.taskForm = taskForm;
        this.createProject();
    }
    createProject() {
        const content = document.querySelector("#content");
        content.innerHTML = ``;
        // Project heading
        const heading = document.createElement("h1");
        heading.innerText = this.project;
        heading.classList.add("heading");
        content.appendChild(heading);
        // Project content
        const project = document.createElement("div");
        project.id = "project";
        project.classList.add("task-view")
        content.appendChild(project);

        const addTaskBtn = document.createElement("button");
        addTaskBtn.innerHTML = `<i class="fa-solid fa-plus">&nbsp;</i><span>Add task<span>`;
        addTaskBtn.className = "btn-add-task";
        addTaskBtn.addEventListener("click", () => {
            this.taskForm.addNewTask(this);
        });

        content.appendChild(addTaskBtn);
        this.updateView();
    }
    updateView() {
        const tasks = this.projectController.getAllTasks();
        const project = document.querySelector("#project");

        if (project) {
            project.innerHTML = "";

            tasks.forEach(element => {
                const task = document.createElement("div");
                task.id = element.id;
                task.classList.add(element.done ? "done-task" : "todo-task");
                task.classList.add(compareAsc(Date.parse(element.dueDate), Date.parse(format(new Date(), "yyyy-MM-dd"))) == -1 ? "task-due-date-passed" : "task-upcoming");
                project.appendChild(task);

                const checkbox = document.createElement("input")
                checkbox.setAttribute("type", "checkbox");
                checkbox.id = `${element.id}-checkbox}`;
                checkbox.checked = element.done;
                task.appendChild(checkbox);
                checkbox.style.backgroundImage = (checkbox.checked) ? `url("../dist/images/check-solid.svg")` : "none";

                checkbox.addEventListener('click', (event) => {
                    element.done = event.target.checked;
                    this.projectController.updateTask(element.id, element.title, element.description, element.dueDate, element.priority, element.done);
                    this.updateView();
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

                editButton.addEventListener("click", (event) => {
                    this.taskForm.editTask(element, this);
                    this.updateView();
                });

                const deleteButton = document.createElement("button");
                deleteButton.id = `${element.id}-delete-button`;
                deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
                task.appendChild(deleteButton);

                deleteButton.addEventListener("click", (event) => {
                    this.projectController.removeTask(element);
                    this.updateView();
                });
            });
        }
    }
}
export default ProjectView;