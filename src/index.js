import loadHeader from "./view_layer/header";
import Sidebar from "./view_layer/sidebar";
import InboxView from "./view_layer/inbox";
import TaskForm from "./view_layer/task_form";
import InboxController from "./app_logic/inbox_controller"


function loadPage() {
    loadHeader();

    new Sidebar();

    const inboxController = new InboxController();
    const inboxTaskForm = new TaskForm(inboxController);
    const inboxView = new InboxView(inboxController, inboxTaskForm);

}
loadPage();