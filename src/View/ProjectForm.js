class ProjectForm {
    constructor(projectController, mode) {
        mode = { ADD: 1, Edit: 2 };
        // Form's project controller
        this.projectController = projectController;

        /******** Elements ************/
        // Modal Container
        this.container = document.createElement("div");
        this.container.id = "project-form";
        this.container.classList.add("modal-container");
        // Modal
        this.modal = document.createElement("div");
        this.modal.classList.add("modal");
        this.container.appendChild(this.modal);
        // Content
        this.content = document.createElement("div");
        this.content.classList.add("modal-content");
        this.content.innerHTML = (mode.ADD) ? "<h1>Add new project</h1>" : "<h1>Edit project</h1>";
        this.modal.appendChild(this.content);
        // Form
        this.form = document.createElement("form");
        this.form.autocomplete = "off";
        this.content.append(this.form);

        this.form.innerHTML = `
            <label for="project-name">Project name</label>
            <input type="text" id="project-name" name="project-name" required>
            <button type="submit" id="submitButton">Submit</button>
        `;

    }
    load() {
        const formSection = document.querySelector("#form-section");
        formSection.appendChild(this.container);
    }
}

export default ProjectForm;