import loadHeader from "./view_layer/header";
import loadSidebar from "./view_layer/sidebar";
import loadAddTODO from "./view_layer/todo_modal";
import loadInbox from "./view_layer/inbox";
import InboxController from "./app_logic/inbox_controller"


function loadPage() {
    const inboxController = new InboxController();
    loadHeader();
    loadSidebar();
    loadAddTODO(inboxController);
    loadInbox(inboxController);
    inboxController.updateInbox();
}
loadPage();