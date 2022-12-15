import ProjectForm from "./ProjectForm";

class SidebarView {
    /**
     * 
     * @param {ProjectForm} projectForm 
     */
    constructor(projectForm) {
        this.projectForm = projectForm;

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
                <button id="inbox-button" class="nav-item"><i class="fa-solid fa-inbox"></i>Inbox</button>
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
            <div id="project-menu" class="nav-items"><div>
            <button id="add-project" style="width:100%";><i class="fa-solid fa-plus"></i> Add project</button>
        `;
        this.addeventsListeners();

    }
    load() {
        const sidebar = document.querySelector("#sidemenu");
        sidebar.appendChild(this.sidebarContainer);
    }
    addeventsListeners() {
        // 
        const addProjectBtn = document.querySelector(".project-container button#add-project");
        addProjectBtn.addEventListener("click", event => {
            this.projectForm.open();
        });
    }
}

export default SidebarView;