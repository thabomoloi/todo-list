import InboxController from "../app_logic/inbox_controller";

class TaskForm {
    /**
     * Creates an instance of task form
     * @param {InboxController} controller  
     */
    constructor(controller) {
        this.controller = controller;

        // Modal container of the form
        this.modal_container = document.createElement("div");
        this.modal_container.className = "todo-modal-container";

        const modal = document.createElement("section");
        modal.classList.add("modal");
        modal.id = "todo-modal";
        this.modal_container.appendChild(modal);

        const content = document.createElement("div");
        content.classList.add("modal-content");
        modal.appendChild(content);

        this.modal_title = document.createElement("h1");
        this.modal_title.innerText = "Add New Task";
        this.modal_title.classList.add("modal-title");
        content.appendChild(this.modal_title);

        // <form> ... </form>
        this.form = document.createElement("form");
        this.form.classList.add("task-form");
        content.appendChild(this.form);

        // label for task title
        this.title_label = document.createElement("label");
        this.title_label.setAttribute("for", "todo-title");
        this.title_label.innerText = "Title";
        this.form.appendChild(this.title_label);

        // text input for title
        this.title_input = document.createElement("input");
        this.title_input.setAttribute("type", "text");
        this.title_input.setAttribute("placeholder", "Title...");
        this.title_input.required = true;
        this.title_input.id = "todo-title";
        this.form.appendChild(this.title_input);

        // label for task description
        this.description_label = document.createElement("label");
        this.description_label.setAttribute("for", "todo-description");
        this.description_label.innerText = "Description";
        this.form.appendChild(this.description_label);

        // text input for description
        this.description_input = document.createElement("input");
        this.description_input.setAttribute("type", "text");
        this.description_input.setAttribute("placeholder", "Add a description...");
        this.description_input.id = "todo-description";
        this.form.appendChild(this.description_input);

        // label for due date
        this.due_date_label = document.createElement("label");
        this.due_date_label.setAttribute("for", "due-date");
        this.due_date_label.innerText = "Due Date";
        this.form.appendChild(this.due_date_label);

        // date input for due date
        this.due_date_input = document.createElement("input");
        this.due_date_input.setAttribute("type", "date");
        this.due_date_input.id = "due-date";
        this.due_date_input.required = true;
        this.form.appendChild(this.due_date_input);

        // task priority label
        this.priority_label = document.createElement("label");
        this.priority_label.setAttribute("for", "priority");
        this.priority_label.innerText = "Priority";
        this.form.appendChild(this.priority_label);

        // Combobox
        this.priority_input = document.createElement("select");
        this.priority_input.id = "priority";
        this.priority_input.required = true;
        this.form.appendChild(this.priority_input);

        const low = document.createElement("option");
        low.setAttribute("value", "low");
        low.innerText = "Low";

        const medium = document.createElement("option");
        medium.innerText = "Medium";
        medium.setAttribute("value", "medium");

        const high = document.createElement("option");
        high.innerText = "High";
        high.setAttribute("value", "high");

        this.priority_input.append(low, medium, high);

        // Cancel button
        const cancelButton = document.createElement("button");
        cancelButton.innerText = "Cancel";
        cancelButton.addEventListener("click", (e) => {
            e.preventDefault();
            this.modal_container.style.display = "none";
        });

        // Submit button
        const submitButton = document.createElement("input");
        submitButton.setAttribute("type", "submit");

        this.form.append(cancelButton, submitButton);

        window.onclick = function (event) {
            if (event.target == this.modal_container || event.target == modal) {
                this.modal_container.style.display = "none";
            }
        };

        this.loadTaskForm();
    }
    loadTaskForm() {
        const body = document.querySelector("body");
        body.appendChild(this.modal_container);
    }

    clearFields() {
        this.title_input.value = "";
        this.due_date_input.value = "";
        this.description_input.value = "";
        this.priority_input.value = "low";
    }
    addNewTask(view) {
        this.modal_title.innerText = "Add New Task";
        this.modal_container.style.display = "block";

        this.form.onsubmit = (event) => {
            event.preventDefault();
            this.controller.addTask(
                this.title_input.value.trim(),
                this.description_input.value.trim(),
                this.due_date_input.value,
                this.priority_input.value,
                false
            );
            this.clearFields();
            this.modal_container.style.display = "none";
            view.updateView();
        };
    }
    editTask(task, view) {
        this.modal_title.innerText = "Edit Task";
        this.modal_container.style.display = "block";

        this.title_input.value = task.title;
        this.due_date_input.value = task.dueDate;
        this.description_input.value = task.description;
        this.priority_input.value = task.priority;

        this.form.onsubmit = (event) => {
            event.preventDefault();
            this.controller.updateTask(
                task.id,
                this.title_input.value.trim(),
                this.description_input.value.trim(),
                this.due_date_input.value,
                this.priority_input.value,
                task.done
            )
            this.clearFields();
            this.modal_container.style.display = "none";
            view.updateView();
        }
    }
}

export default TaskForm;