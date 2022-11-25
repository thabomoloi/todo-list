import ProjectStorage from "../data_storage/ProjectStorage";

class ProjectForm {
    constructor() {
        this.controller = new ProjectStorage();

        // Modal container of the form
        this.modal_container = document.createElement("div");
        this.modal_container.className = "project-modal-container";
        this.modal_container.style.display = "none";

        const modal = document.createElement("section");
        modal.classList.add("modal");
        modal.id = "project-modal";
        this.modal_container.appendChild(modal);

        const content = document.createElement("div");
        content.classList.add("modal-content");
        modal.appendChild(content);

        this.modal_title = document.createElement("h1");
        this.modal_title.innerText = "Add New Project";
        this.modal_title.classList.add("modal-title");
        content.appendChild(this.modal_title);

        // <form> ... </form>
        this.form = document.createElement("form");
        this.form.classList.add("task-form");
        content.appendChild(this.form);

        // text input for title
        this.projectName = document.createElement("input");
        this.projectName.setAttribute("type", "text");
        this.projectName.setAttribute("placeholder", "Project name...");
        this.projectName.required = true;
        this.projectName.id = "todo-title";
        this.form.appendChild(this.projectName);


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

        this.loadProjectForm();
    }
    loadProjectForm() {
        const body = document.querySelector("body");
        body.appendChild(this.modal_container);
    }
    addNewProject(view) {
        this.modal_title.innerText = "Add New Project";
        this.modal_container.style.display = "block";

        this.form.onsubmit = (event) => {
            event.preventDefault();
            this.controller.addProject(this.projectName.value);
            this.projectName.value = "";
            this.modal_container.style.display = "none";
            view.updateView();
        };
    }
}

export default ProjectForm;