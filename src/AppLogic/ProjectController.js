import Task from "../Entities/Task";
import Project from "../Entities/Project";
import DA from "../DataAccess/DA";

class ProjectController {
    constructor() {
        this.projectStorage = new DA();
        this.projects = this.projectStorage.allProjects();
    }
    allProjects() {
        return this.projectStorage.allProjects();
    }
    /**
     * 
     * @param {string} projID 
     */
    findProject(projID) {
        var project = null;
        for (let i = 0; i < this.projects.length; i++) {
            if (projID == this.projects[i].ID)
                project = this.projects[i];
        }
        return project;
    }
    allTasks() {
        var tasks = [new Task()];
        tasks.pop();

        this.projectStorage.allProjects().forEach(project => {
            tasks = Object.assign([], tasks, project.tasks);
        });
        return tasks;
    }
    /**
     * Adds a new project
     * @param {string} name 
     */
    addProject(name) {
        let counter = 0;
        if (this.projects.length != 0) {
            const lastProjID = this.projects[this.projects.length - 1].ID;
            const lastCount = lastProjID.substring(lastProjID.lastIndexOf("-") + 1);
            counter = parseInt(lastCount);
        }

        const projID = `project-${counter + 1}`;
        const project = new Project(projID, name);
        this.projectStorage.addProject(project);
        this.projects = this.projectStorage.allProjects();
    }

    /**
     * Updates a project.
     * @param {Project} project 
     */
    updateProject(project) {
        this.projectStorage.updateProject(project);
        this.projects = this.projectStorage.allProjects();
    }

    /**
     * Removes a project
     * @param {string} ID 
     */
    removeProject(ID) {
        this.projectStorage.removeProject(ID);
        this.projects = this.projectStorage.allProjects();
    }

    /**
     * Add task
     * @param {string} projID 
     */
    addTask(projID, name, description, dueDate, priority) {
        var project = new Project();
        this.projects.forEach(element => {
            if (projID == element.ID)
                project = element;
        });
        project.addTask(name, description, dueDate, priority);
        this.updateProject(project);
    }
    /**
     * Updates a task
     * @param {Task} task 
     */
    updateTask(task) {
        var project = new Project();
        this.projects.forEach(element => {
            if (task.projectID == element.ID)
                project = element;
        });
        project.updateTask(task);
        this.updateProject(project);
    }
    /**
     * Deletes a task
     * @param {string} projID 
     * @param {string} taskID 
     */
    removeTask(projID, taskID) {
        var project = new Project();
        this.projects.forEach(element => {
            if (projID == element.ID)
                project = element;
        });

        project.removeTask(taskID);
        this.updateProject(project);
    }
}

export default ProjectController;