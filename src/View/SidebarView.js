import ProjectForm from "./ProjectForm";
import ProjectController from "../AppLogic/ProjectController";
import ProjectView from "./ProjectView";

class SidebarView {
    /**
     * 
     * @param {ProjectForm} projectForm 
     * @param {TaskForm} taskForm
     * @param {ProjectController} projectController
     */
    constructor(projectForm, taskForm, projectController) {
        this.projectController = projectController;
        this.projectForm = projectForm;
        this.taskForm = taskForm;

        /******** Elements *********/
        this.sidebarContainer = document.createElement("div");
        this.load();
        this.sidebarContainer.classList.add("sidebar-container");

        // Tasks menu
        this.tasks = document.createElement("div");
        this.tasks.classList.add("task-container");
        this.sidebarContainer.appendChild(this.tasks);
        this.tasks.innerHTML = `
            <h2>Tasks</h2>
            <div id="task-menu" class="nav-items"> 
                <button id="inbox-button" class="nav-item active-side-menu-btn"><i class="fa-solid fa-inbox"></i>Inbox</button>
                <button id="today-button" class="nav-item"><i class="fa-solid fa-calendar-day"></i>Today</button>
                <button id="week-buttion" class="nav-item"><i class="fa-solid fa-calendar-week"></i>This Week</button>
            </div>
        `;

        // Projects menu
        this.projects = document.createElement("div");
        this.projects.classList.add("project-container");
        this.sidebarContainer.appendChild(this.projects);
        this.projects.innerHTML = `
            <h2>Projects</h2>
            <div id="project-menu" class="nav-items"></div>
            <button id="add-project" style="width:100%";><i class="fa-solid fa-plus"></i> Add project</button>
        `;

        this.projectMenu = document.querySelector("#sidemenu #project-menu");
        if (this.projectMenu) {
            projectController.allProjects().forEach(element => {
                const projButton = document.createElement("button");
                projButton.classList.add("nav-item");
                if (element.name != "Inbox") {
                    projButton.innerHTML = `<i class="fa-solid fa-list-check"></i>${element.name}`;
                    projButton.id = element.ID;
                    this.projectMenu.appendChild(projButton);
                    //===================
                    projButton.addEventListener('click', () => {
                        const view = new ProjectView(this.taskForm, this.projectController, element.ID);

                        // Remove Active Side Menu Button
                        document.querySelectorAll("#sidemenu .nav-item").forEach(navItem => {
                            if (navItem.classList.contains("active-side-menu-btn"))
                                navItem.classList.remove("active-side-menu-btn");
                        });

                        projButton.classList.add("active-side-menu-btn");
                    });
                }


            });
        }
        this.addeventsListeners();

    }
    load() {
        const sidebar = document.querySelector("#sidemenu");
        sidebar.innerHTML = "";
        sidebar.appendChild(this.sidebarContainer);
    }
    addeventsListeners() {
        // 
        const addProjectBtn = document.querySelector(".project-container button#add-project");
        addProjectBtn.addEventListener("click", event => {
            this.projectForm.open(0);
        });
    }
}

export default SidebarView;