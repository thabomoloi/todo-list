import { add } from "date-fns";
import ProjectStorage from "../data_storage/ProjectStorage";
import ProjectForm from "./project_form";

class Sidebar {
    constructor() {
        this.projectForm = new ProjectForm();
        this.load();
    }
    createTaskMenu() {
        this.tasks = document.createElement("div");
        this.tasks.className = "tasks";
        this.tasks.innerHTML = "<h2>Tasks</h2>";

        // Tasks Menu
        this.taskList = document.createElement("div");
        this.taskList.className = "nav-items";

        // Inbox
        this.inbox = document.createElement("button");
        this.inbox.className = "nav-item";
        this.inbox.classList.add("active-side-menu-btn");
        this.inbox.innerHTML = `<i class="fa-solid fa-inbox"></i><span>Inbox</span>`;

        // Today
        this.today = document.createElement("button");
        this.today.className = "nav-item"
        this.today.innerHTML = `<i class="fa-solid fa-calendar-day"></i><span>Today<span>`;

        // Week
        this.upcoming = document.createElement("button");
        this.upcoming.className = "nav-item";
        this.upcoming.innerHTML = `<i class="fa-solid fa-calendar-days"></i><span>Upcoming<span>`;

        // Priority
        this.priority = document.createElement("button")
        this.priority.className = "priority";
        this.priority.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i><span>Priority<span>`;

        // Priority submenu
        this.priorityList = document.createElement("div")
        this.priorityList.classList.add("subnav", "nav-items");

        this.taskList.append(this.inbox, this.today, this.upcoming, this.priority)
        this.priority.addEventListener("click", () => {
            const display = this.priorityList.style.display;
            this.priorityList.style.display = (display != "none") ? "none" : "block";
        })
        // high
        this.high = document.createElement("button");
        this.high.classList.add("nav-item", "priority-item");
        this.high.innerHTML = `<i class="fa-solid fa-angle-right"></i><span>High</span>`;
        // Medium
        this.medium = document.createElement("button");
        this.medium.classList.add("nav-item", "priority-item");
        this.medium.innerHTML = `<i class="fa-solid fa-angle-right"></i><span>Medium</span>`;
        // Low
        this.low = document.createElement("button");
        this.low.classList.add("nav-item", "priority-item");
        this.low.innerHTML = `<i class="fa-solid fa-angle-right"></i><span>Low</span>`;

        this.priorityList.append(this.high, this.medium, this.low);
        this.taskList.appendChild(this.priorityList);
        this.tasks.appendChild(this.taskList);
    }
    createProjectsMenu() {
        this.projects = document.createElement("div");
        this.projects.className = "projects";
        this.projects.innerHTML = "<h2>Projects</h2>";

        this.projectList = document.createElement("div");
        this.projectList.classList.add("project-items", "nav-items");


        this.projects.appendChild(this.projectList);
        this.updateView();
    }
    updateView() {
        this.projectList.innerHTML = ``;
        const storage = new ProjectStorage();
        const allProjects = storage.getAllProjects();

        allProjects.forEach(element => {
            const projButton = document.createElement("button");
            projButton.className = "nav-item";
            projButton.id = element.id;
            projButton.innerHTML = element.name;
            this.projectList.appendChild(projButton);
        });
        this.add_project = document.createElement("button");
        this.add_project.classList.add("btn-add-project");
        this.add_project.innerHTML = `<i class="fa-solid fa-plus"></i><span>Add new project<span>`;
        this.add_project.addEventListener("click", () => {
            this.projectForm.addNewProject(this);
        })
        this.projectList.appendChild(this.add_project);
    }
    load() {
        this.createTaskMenu();
        this.createProjectsMenu();

        const nav = document.createElement("nav");
        nav.append(this.tasks, this.projects);

        const sidebar = document.querySelector("#sidemenu");
        sidebar.innerHTML = "";
        sidebar.appendChild(nav);
    }
}

export default Sidebar;