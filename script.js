(function () {
  "use strict";

  const addButtonEl = document.querySelector(".add-button");
  const addTaskInputEl = document.querySelector(".task-input-el");
  const tasksListEl = document.querySelector(".todo-list");

  addButtonEl.addEventListener("click", handleAddButtonClick);

  function handleAddButtonClick(e) {
    const taskItemEl = createTaskItem();

    renderTaskItem(taskItemEl);
  }

  function renderTaskItem(taskItemEl) {
    tasksListEl.append(taskItemEl);
  }

  function createTaskItem() {
    const taskListItemEl = document.createElement("li");
    const checkboxTaskEl = createCheckboxTaskItemEl();
    const deleteTaskEl = createDeleteTaskItemEl();

    taskListItemEl.innerText = addTaskInputEl.value;
    taskListItemEl.prepend(checkboxTaskEl);
    taskListItemEl.append(deleteTaskEl);

    return taskListItemEl;
  }

  function createCheckboxTaskItemEl() {
    const checkboxTaskItemEl = document.createElement("input");
    checkboxTaskItemEl.setAttribute("type", "checkbox");
    checkboxTaskItemEl.addEventListener("click", handleTaskCheckClick);

    return checkboxTaskItemEl;
  }

  function handleTaskCheckClick(e) {
    e.target.parentElement.classList.toggle("done");
  }

  function createDeleteTaskItemEl() {
    const deleteTaskButtonEl = document.createElement("div");
    deleteTaskButtonEl.classList.add("removeButton");
    deleteTaskButtonEl.addEventListener("click", handleDeleteTaskClick);

    return deleteTaskButtonEl;
  }

  function handleDeleteTaskClick(e) {
    e.target.parentElement.remove();
  }
})();