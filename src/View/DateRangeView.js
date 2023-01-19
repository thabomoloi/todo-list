import ProjectController from "../AppLogic/ProjectController";
import { format, differenceInDays } from "date-fns";
import TaskForm from "./TaskForm";

class DateRangeView {
    /**
     * @param {TaskForm} taskForm
     * @param {ProjectController} projectController 
     */
    constructor(taskForm, projectController, buttonID) {
        this.taskForm = taskForm;
        this.projectController = projectController;
        this.senderID = buttonID;
        this.tasks = (this.senderID == "today") ? this.getToday() : this.getThisWeek();
        this.loadTaskView();

    }
    /**
     * Get this week tasks
     * @returns This week's tasks
     */
    getThisWeek() {
        const daysOfWeek = [];

        const today = new Date();
        const currentDate = format(today, "yyyy-MM-dd");

        for (let index = 0; index < 7; index++) {
            const day = today.getDate() - today.getDay() + index;
            const date = currentDate.slice(0, 8) +
                (day.toString().length == 1 ? "0" + day : "" + day);
            daysOfWeek.push(date);
        }

        const allTasks = this.projectController.allTasks();
        return allTasks.filter(task => daysOfWeek.includes(task.dueDate));
    }
    /**
     * Get todays task.
     * @returns Today's task
     */
    getToday() {
        const today = format(new Date(), "yyyy-MM-dd");
        const allTasks = this.projectController.allTasks();
        return allTasks.filter(task => task.dueDate == today);
    }

    loadTaskView() {
        const content = document.querySelector("main section#content");

        if (content) {
            content.innerHTML = "";
            this.heading = document.createElement("h1");
            content.appendChild(this.heading);
            this.heading.innerText = (this.senderID == "today") ? "Today" : "This Week";
            this.heading.id = this.senderID;
            const container = document.createElement("div");
            container.classList.add("task-view");
            content.appendChild(container);

            this.tasks.forEach(task => {
                const taskDiv = document.createElement("div");
                container.appendChild(taskDiv);

                // Done checkboxk
                const checkDiv = document.createElement("div")
                checkDiv.classList.add("checks");

                const doneCheck = document.createElement("input");
                doneCheck.setAttribute("type", "checkbox");
                checkDiv.appendChild(doneCheck);
                checkDiv.appendChild(document.createElement("span"));

                doneCheck.checked = task.done;
                doneCheck.style.backgroundImage = (doneCheck.checked) ? "url('./images/check-solid.svg')" : "none";

                doneCheck.onclick = () => {
                    task.done = doneCheck.checked;
                    this.projectController.updateTask(task);
                    taskDiv.classList.toggle("done-task");
                    doneCheck.style.backgroundImage = (doneCheck.checked) ? "url('./images/check-solid.svg')" : "none";

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
                deleteButton.onclick = () => {
                    this.projectController.removeTask(task.projectID, task.ID);
                    new DateRangeView(this.taskForm, this.projectController, this.senderID);
                }

                taskDiv.append(checkDiv, nameDescr, priorityColor, dueDate, editButton, deleteButton);
            });
        }
    }
}

export default DateRangeView;