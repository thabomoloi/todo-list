import ProjectStorage from "../data_storage/ProjectStorage";

class ProjectController {
    constructor(projectID) {
        this.projectID = projectID;
        this.projectStorage = new ProjectStorage();
    }
    getAllTasks() {
        return this.projectStorage.getAllProjectTasks(this.projectID);
    }
    addTask(title, description, dueDate, priority, done) {
        this.projectStorage.addProjectTask(this.projectID, title, description, dueDate, priority, done);
    }
    updateTask(id, title, description, dueDate, priority, done) {
        this.projectStorage.updateProjectTask(this.projectID, id, title, description, dueDate, priority, done);
    }
    removeTask(task) {
        this.projectStorage.removeProjectTask(this.projectID, task.ID);
    }
}

export default ProjectController;


