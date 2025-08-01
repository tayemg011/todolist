const addtask = document.getElementById("addTaskButton");
const inputTask = document.getElementById("inputTask");
const tasks = document.getElementById("tasks");

////////////////

addtask.addEventListener("click", () => {
    
const taskText = inputTask.value.trim()
    if(taskText) {
    const div = document.createElement("div");
    const deleteicon = document.createElement("button")
    const icon = document.createElement("span")
    deleteicon.className = "deletebutton"
    icon.className = "material-symbols-rounded"
    icon.textContent = "delete"
    div.className = "tasksdiv";
    const li = document.createElement("li")
    const hr = document.createElement("hr")
    li.textContent = taskText;
    deleteicon.appendChild(icon)
    div.appendChild(li)
    div.appendChild(deleteicon)
    tasks.appendChild(div);
    tasks.appendChild(hr)
    inputTask.value = "";

    li.addEventListener("click", () => {
        li.classList.toggle("completed")
    })

    deleteicon.addEventListener("click", () => {
        li.remove()
        deleteicon.remove()
        hr.remove()
        div.remove()
        icon.remove()
    })
}})