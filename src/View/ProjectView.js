import ProjectController from "../AppLogic/ProjectController";
import Project from "../Entities/Project";
import Task from "../Entities/Task";
import format from "date-fns/format";
import TaskForm from "./TaskForm";

class ProjectView {
    /**
     * @param {TaskForm} taskForm
     * @param {ProjectController} projectController 
     * @param {string} projectID
     */
    constructor(taskForm, projectController, projectID) {
        this.projectController = projectController;
        this.project = projectController.findProject(projectID);
        this.loadTaskView(taskForm);
    }
    /**
     * 
     * @param {TaskForm} taskForm 
     */
    loadTaskView(taskForm) {
        const content = document.querySelector("main section#content");

        if (content && this.project) {
            content.innerHTML = "";
            this.heading = document.createElement("h1");
            content.appendChild(this.heading);
            this.heading.id = this.project.ID;
            this.heading.innerText = this.project.name;

            const container = document.createElement("div");
            container.classList.add("task-view");
            content.appendChild(container);

            this.project.tasks.forEach(task => {
                const taskDiv = document.createElement("div");
                container.appendChild(taskDiv);

                // Done checkboxk
                const doneCheck = document.createElement("input");
                doneCheck.setAttribute("type", "checkbox");
                doneCheck.checked = task.done;

                // Name and description div
                const nameDescr = document.createElement("span");
                nameDescr.innerHTML = `<div class="task-name">${task.name}</div><div class="descrition">${task.description}</div>`;

                // Priority Color
                const priorityColor = document.createElement("span");
                priorityColor.classList.add("priority-color");
                priorityColor.classList.add(task.priority);

                // Due date
                const dueDate = document.createElement("span");
                dueDate.classList.add("due-date");
                dueDate.innerText = task.dueDate;

                // Operation: edit-delete
                const editButton = document.createElement("button");
                editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
                editButton.onclick = (event) => {
                    taskForm.open(1, task);
                }

                const deleteButton = document.createElement("button")
                deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
                deleteButton.onclick = (event) => {
                    this.projectController.removeTask(task.projectID, task.ID);
                    this.loadTaskView();
                }

                taskDiv.append(doneCheck, nameDescr, priorityColor, dueDate, editButton, deleteButton);
            });

            const addTaskBtn = document.createElement("button");
            content.append(addTaskBtn);
            addTaskBtn.classList.add("btn-add-task");
            addTaskBtn.innerHTML = `<i class="fa-solid fa-plus">&nbsp;</i>Add task`;

            addTaskBtn.addEventListener("click", event => {
                taskForm.open(0);
            });
        }
    }
}

export default ProjectView;