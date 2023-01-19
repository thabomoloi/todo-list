import ProjectController from "../AppLogic/ProjectController";
import Project from "../Entities/Project";
import Task from "../Entities/Task";
import TaskForm from "./TaskForm";
import { differenceInDays, format } from "date-fns";
import DA from "../DataAccess/DA";
import SidebarView from "./SidebarView";

class ProjectView {
    /**
     * @param {TaskForm} taskForm
     * @param {ProjectController} projectController 
     * @param {string} projectID
     */
    constructor(taskForm, projectController, projectID) {
        this.projectController = projectController;
        this.project = projectController.findProject(projectID);
        this.taskForm = taskForm;
        this.loadTaskView();
    }

    loadTaskView() {
        const content = document.querySelector("main section#content");

        if (content && this.project) {
            content.innerHTML = "";
            this.heading = document.createElement("h1");
            content.appendChild(this.heading);
            this.heading.id = this.project.ID;
            this.heading.innerText = this.project.name;

            if (this.heading.id.includes("project") && !this.project.name.includes("Inbox")) {
                const deleteIcon = document.createElement("span");
                deleteIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
                this.heading.appendChild(deleteIcon);

                deleteIcon.style.float = "right";
                deleteIcon.style.fontSize = "0.8em";

                deleteIcon.addEventListener("click", (event) => {
                    this.projectController.removeProject(this.project.ID);
                    location.reload();
                });
            }

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

                doneCheck.onclick = () => {
                    task.done = doneCheck.checked;
                    this.projectController.updateTask(task);
                    taskDiv.classList.toggle("done-task");
                };

                if (task.done)
                    taskDiv.classList.add("done-task");

                // Name and description div
                const nameDescr = document.createElement("span");
                nameDescr.className = "task-name";
                nameDescr.innerText = task.name;

                // Priority Color
                const priorityColor = document.createElement("span");
                priorityColor.classList.add("priority-color");
                priorityColor.classList.add(task.priority);

                // Due date
                const dueDate = document.createElement("span");
                dueDate.classList.add("task-due-date");
                dueDate.innerText = task.dueDate;

                const currentDate = format(new Date(), "yyyy/MM/dd");
                const diffInDays = differenceInDays(new Date(currentDate), new Date(task.dueDate));

                if (diffInDays > 0) {
                    taskDiv.classList.add('task-due-date-passed');
                }

                // Operation: edit-delete
                const editButton = document.createElement("button");
                editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
                editButton.onclick = (event) => {
                    this.taskForm.open(1, task);
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
                this.taskForm.open(0);
            });
        }
    }
}

export default ProjectView;