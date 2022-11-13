const getTasks = () => {

    const tasks = document.createElement("div");
    tasks.className = "tasks";
    tasks.innerHTML = "<h2>Tasks</h2>";

    // Tasks Menu
    const taskList = document.createElement("div");
    taskList.className = "nav-items";

    // Today
    const today = document.createElement("button");
    today.className = "nav-item"
    today.innerHTML = `<i class="fa-solid fa-calendar-day"></i><span>Today<span>`;

    // Week
    const week = document.createElement("button");
    week.className = "nav-item";
    week.innerHTML = `<i class="fa-solid fa-calendar-week"></i><span>This Week<span>`;

    // Priority
    const priority = document.createElement("button")
    priority.className = "priority";
    priority.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i><span>Priority<span>`;

    // Priority submenu
    const priorityList = document.createElement("div")
    priorityList.classList.add("subnav", "nav-items");

    taskList.append(today, week, priority)

    // high
    const high = document.createElement("button");
    high.classList.add("nav-item", "priority-item");
    high.innerHTML = `<i class="fa-solid fa-angle-right"></i><span>High</span>`;
    // Medium
    const medium = document.createElement("button");
    medium.classList.add("nav-item", "priority-item");
    medium.innerHTML = `<i class="fa-solid fa-angle-right"></i><span>Medium</span>`;
    // Low
    const low = document.createElement("button");
    low.classList.add("nav-item", "priority-item");
    low.innerHTML = `<i class="fa-solid fa-angle-right"></i><span>Low</span>`;

    priorityList.append(high, medium, low);
    taskList.appendChild(priorityList);
    tasks.appendChild(taskList);

    return tasks;
}

const getProjects = () => {
    const projects = document.createElement("div");
    projects.className = "projects";
    projects.innerHTML = "<h2>Projects</h2>";

    const projectList = document.createElement("div");
    projectList.classList.add("project-items", "nav-items");

    const add_project = document.createElement("button");
    add_project.classList.add("btn-add-project");
    add_project.innerHTML = `<i class="fa-solid fa-plus"></i><span>Add new<span>`;
    projectList.appendChild(add_project);
    projects.appendChild(projectList);
    return projects;
}

function loadSidebar() {
    const nav = document.createElement("nav");
    nav.appendChild(getTasks());
    nav.appendChild(getProjects());

    const sidebar = document.querySelector("#sidemenu");
    sidebar.appendChild(nav);
}

export default loadSidebar;