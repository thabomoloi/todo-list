function createModal(inboxController) {
    const modal_container = document.createElement("div");
    modal_container.className = "todo-modal-container";

    const modal = document.createElement("section");
    modal.classList.add("modal");
    modal.id = "todo-modal";
    modal_container.appendChild(modal);

    const content = document.createElement("div");
    content.classList.add("modal-content");
    modal.appendChild(content);

    const modal_title = document.createElement("h1");
    modal_title.innerText = "Add New Task";
    modal_title.classList.add("modal-title");
    content.appendChild(modal_title);

    const form = document.createElement("form");
    form.classList.add("task-form");
    content.appendChild(form);

    const title_label = document.createElement("label");
    title_label.setAttribute("for", "todo-title");
    title_label.innerText = "Title";
    form.appendChild(title_label);

    const title_input = document.createElement("input");
    title_input.setAttribute("type", "text");
    title_input.setAttribute("placeholder", "Title...");
    title_input.required = true;
    title_input.id = "todo-title";
    form.appendChild(title_input);

    const description_label = document.createElement("label");
    description_label.setAttribute("for", "todo-description");
    description_label.innerText = "Description";
    form.appendChild(description_label);

    const description_input = document.createElement("input");
    description_input.setAttribute("type", "text");
    description_input.setAttribute("placeholder", "Add a description...");
    description_input.id = "todo-description";
    form.appendChild(description_input);

    const due_date_label = document.createElement("label");
    due_date_label.setAttribute("for", "due-date");
    due_date_label.innerText = "Due Date";
    form.appendChild(due_date_label);

    const due_date_input = document.createElement("input");
    due_date_input.setAttribute("type", "date");
    due_date_input.id = "due-date";
    due_date_input.required = true;
    form.appendChild(due_date_input);

    const priority_label = document.createElement("label");
    priority_label.setAttribute("for", "priority");
    priority_label.innerText = "Priority";
    form.appendChild(priority_label);

    const priority_input = document.createElement("select");
    priority_input.id = "priority";
    priority_input.required = true;
    form.appendChild(priority_input);

    const low = document.createElement("option");
    low.setAttribute("value", "low");
    low.innerText = "Low";
    const medium = document.createElement("option");
    medium.innerText = "Medium";
    medium.setAttribute("value", "medium");
    const high = document.createElement("option");
    high.innerText = "High";
    high.setAttribute("value", "high");
    priority_input.append(low, medium, high);

    const cancelButton = document.createElement("button");
    cancelButton.innerText = "Cancel";
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        modal_container.style.display = "none";
    });
    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    form.append(cancelButton, submitButton);
    window.onclick = function (event) {
        if (event.target == modal_container || event.target == modal) {
            modal_container.style.display = "none";
        }
    };
    const addTaskBtn = document.querySelector(".btn-add-task");
    addTaskBtn.addEventListener("click", () => {
        modal_container.style.display = "block";
    })
    form.onsubmit = (event) => {
        event.preventDefault();
        inboxController.addInboxTask(
            title_input.value.trim(),
            description_input.value.trim(),
            due_date_input.value,
            priority_input.value
        );
        title_input.value = "";
        due_date_input.value = "";
        description_input.value = "";
        priority_input.value = "low";
        modal_container.style.display = "none";
    };
    return modal_container;
}
function loadAddTODO(inboxController) {
    const body = document.querySelector("body");
    const modal = createModal(inboxController);
    body.appendChild(modal);
}

export default loadAddTODO;