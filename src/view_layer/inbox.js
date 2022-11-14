function loadInbox() {
    const content = document.querySelector("#content");
    // Inbox heading
    const heading = document.createElement("h1");
    heading.innerText = "Inbox";
    heading.classList.add("heading");
    content.appendChild(heading);
    // Inbox content
    const inbox = document.createElement("div");
    inbox.id = "inbox";
    content.appendChild(inbox);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.innerHTML = `<i class="fa-solid fa-plus"></i><span>Add task<span>`;
    addTaskBtn.className = "btn-add-task";
    content.appendChild(addTaskBtn);
}
export default loadInbox;