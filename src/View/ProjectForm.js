import ProjectController from "../AppLogic/ProjectController";
import SidebarView from "./SidebarView";

class ProjectForm {
    /**
     * 
     * @param {ProjectController} projectController 
     * @param {TaskForm} taskForm
     */
    constructor(projectController, taskForm) {
        this.taskForm = taskForm;
        this.mode = { ADD: 0, Edit: 1 };
        this.operation = 0;

        // Form's project controller
        this.projectController = projectController;

        /******** Elements ************/
        // Modal Container
        this.container = document.createElement("div");
        this.load();
        this.container.id = "project-form";
        this.container.classList.add("modal-container");
        // Modal
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        this.container.appendChild(this.modal);
        // Content
        this.content = document.createElement("div");
        this.content.classList.add("modal-content");
        this.content.innerHTML = `<h1 id="project-heading">Add new project</h1>`;

        this.modal.appendChild(this.content);
        // Form
        this.form = document.createElement("form");
        this.form.autocomplete = "off";
        this.content.append(this.form);

        this.form.innerHTML = `
            <label for="project-name">Project name</label>
            <input type="text" id="project-name" minlentgth="3" maxlength="13S" required>
            <div class="form-butttons">
                <button id="cancelButton">Cancel</button>
                <button type="submit" id="submitButton">Submit</button>
            </div>
        `;
        this.nameInput = document.querySelector("form input#project-name");

        this.addEventsListeners();

    }
    load() {
        const formSection = document.querySelector("#form-section");
        formSection.appendChild(this.container);
    }
    /**
     * @param {number} operation 
     * @param {Project} project
     */
    open(operation, project = null) {
        this.project = project;
        this.operation = operation;
        const heading = document.querySelector("#project-form #project-heading");
        heading.innerText = (operation == this.mode.ADD) ? "Add new project" : "Edit project";
        this.container.style.display = "block";
    }
    close() {
        this.clearFields();
        this.container.style.display = "none";
    }
    clearFields() {
        this.nameInput.value = "";
    }
    addEventsListeners() {
        // Close modal when window is clicked
        window.addEventListener("click", event => {
            if (event.target == this.modal) {
                this.close();
            }
        });

        // Close modal on cancel
        const cancelButton = document.querySelector("#project-form #cancelButton");
        cancelButton.addEventListener("click", event => {
            event.preventDefault();
            this.close();
        });

        this.form.onsubmit = (event) => {
            event.preventDefault(); // Prevent Page refresh

            const projectName = this.nameInput.value;
            if (this.operation == this.mode.ADD)
                this.projectController.addProject(projectName);
            else {
                this.project.name = projectName;
                this.projectController.updateProject(this.project);
            }
            const activeID = document.querySelector(".nav-item.active-side-menu-btn").id;

            new SidebarView(this, this.taskForm, this.projectController);

            // Remove Active Side Menu Button
            document.querySelectorAll("#sidemenu .nav-item").forEach(navItem => {
                if (navItem.classList.contains("active-side-menu-btn"))
                    navItem.classList.remove("active-side-menu-btn");
            });

            document.querySelector(`#sidemenu button.nav-item#${activeID}`).classList.add("active-side-menu-btn");

            this.close();
        }

    }
}

export default ProjectForm;