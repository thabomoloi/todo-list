class TaskForm {
    constructor(projectController, mode) {
        mode = { ADD: 1, Edit: 2 };
        // Form's project controller
        this.projectController = projectController;

        /******** Elements ************/
        // Modal Container
        this.container = document.createElement("div");
        this.container.id = "task-form";
        this.container.classList.add("modal-container");
        // Modal
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        this.container.appendChild(this.modal);
        // Content
        this.content = document.createElement("div");
        this.content.classList.add("modal-content");
        this.content.innerHTML = (mode.ADD) ? "<h1>Add new task</h1>" : "<h1>Edit task</h1>";
        this.modal.appendChild(this.content);
        // Form
        this.form = document.createElement("form");
        this.form.autocomplete = "off";
        this.content.append(this.form);

        this.form.innerHTML = `
            <label for="task-name">Task name</label>
            <input type="text" id="project-name" name="task-name" required>

            <label for="task-description">Description <span class="optional">(Optional)</sapn></label>
            <input type="text" id="task-description" name="task-description">

            <label for="task-due-date">Due date</label>
            <input type="date" id="task-due-date" name="task-due-date" required>

            <label for="task-priority">Priority</label>
            <select id="task-priority" name="task-priority" required>
               <option disabled selected></option>
               <option value="low">Low</option> 
               <option value="medium">Medium</option>
               <option value="high">High</option>
            </select>
            <button type="submit" id="submitButton">Submit</button>
        `;

    }
    load() {
        const formSection = document.querySelector("#form-section");
        formSection.appendChild(this.container);
    }
}

export default TaskForm;