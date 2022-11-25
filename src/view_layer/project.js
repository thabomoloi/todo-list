import ProjectController from "../app_logic/project_controller";
import TaskForm from "./task_form";
import ProjectView from "./projectView";

function loadProject(id) {
    const projectController = new ProjectController(id);
    const taskForm = new TaskForm(projectController);
    const projectView = new ProjectView(id, projectController, taskForm);
}

export default loadProject;
