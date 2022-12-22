import ProjectController from "../AppLogic/ProjectController";
import Task from "../Entities/Task";

class TaskForm {
    /**
     * 
     * @param {ProjectController} projectController 
     */
    constructor(projectController) {
        this.mode = { ADD: 0, Edit: 1 };
        // Form's project controller
        this.projectController = projectController;
        this.operation = 0;

        /******** Elements ************/
        // Modal Container
        this.container = document.createElement("div");
        this.container.id = "task-form";
        this.container.classList.add("modal-container");
        this.load();
        // Modal
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        this.container.appendChild(this.modal);
        // Content
        this.content = document.createElement("div");
        this.content.classList.add("modal-content");
        this.content.innerHTML = `<h1 id="task-heading">Add new task</h1>`;
        this.modal.appendChild(this.content);
        // Form
        this.form = document.createElement("form");
        this.form.autocomplete = "off";
        this.content.append(this.form);

        this.form.innerHTML = `
            <label for="task-name">Task name</label>
            <input type="text" id="task-name" required>

            <label for="task-description">Description <span class="optional">(Optional)</sapn></label>
            <input type="text" id="task-description">

            <label for="task-due-date">Due date</label>
            <input type="date" id="task-due-date" required>

            <label for="task-priority">Priority</label>
            <select id="task-priority" required>
               <option disabled selected></option>
               <option value="low">Low</option> 
               <option value="medium">Medium</option>
               <option value="high">High</option>
            </select>
            <div class="form-butttons">
                <button id="cancelButton">Cancel</button>
                <button type="submit" id="submitButton">Submit</button>
            </div>
        `;
        this.taskNameInput = document.querySelector("form input#task-name");
        this.taskDescriptionInput = document.querySelector("form input#task-description");
        this.taskDueDateInput = document.querySelector("form input#task-due-date");
        this.taskPrioritySelect = document.querySelector("form select#task-priority");

        this.addEventsListeners();
    }
    load() {
        const formSection = document.querySelector("#form-section");
        formSection.appendChild(this.container);
    }
    /**
     * @param {number} operation 
     * @param {Task} task
     */
    open(operation, task = null) {
        this.task = task;
        this.operation = operation;
        const heading = document.querySelector("#task-form #task-heading");
        heading.innerText = (operation == this.mode.ADD) ? "Add new task" : "Edit task";
        this.container.style.display = "block";

        if (operation == this.mode.Edit && task) {
            this.taskNameInput.value = task.name;
            this.taskDescriptionInput.value = task.description;
            this.taskDueDateInput.value = task.dueDate;
            this.taskPrioritySelect.value = task.priority;
        }
    }
    close() {
        this.clearFields();
        this.container.style.display = "none";
    }
    clearFields() {
        this.taskNameInput.value = "";
        this.taskDescriptionInput.value = "";
        this.taskDueDateInput.value = "";
        this.taskPrioritySelect.value = "";
    }
    addEventsListeners() {
        // Close modal when window is clicked
        window.addEventListener("click", event => {
            if (event.target == this.modal) {
                this.close();
            }
        });

        // Close modal on cancel
        const cancelButton = document.querySelector("#task-form #cancelButton");
        cancelButton.addEventListener("click", event => {
            event.preventDefault();
            this.close();
        });

        this.form.onsubmit = (event) => {
            if (this.operation == this.mode.ADD) {
                const projID = document.querySelector("#content > h1")?.id;
                if (projID)
                    this.projectController.addTask(
                        projID,
                        this.taskNameInput.value,
                        this.taskDescriptionInput.value,
                        this.taskDueDateInput.value,
                        this.taskPrioritySelect.value);

            }
            else {
                this.task.name = this.taskNameInput.value;
                this.task.description = this.taskDescriptionInput.value;
                this.task.dueDate = this.taskDueDateInput.value;
                this.task.priority = this.taskPrioritySelect.value;
                this.projectController.updateTask(this.task);
            }
            this.close();
        }

    }
}

export default TaskForm;