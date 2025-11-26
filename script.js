const elInput = document.querySelector('.input');
const elDificulity = document.querySelector('.select');
const elCategory = document.querySelector('.col input');
const elDescription = document.querySelector('.textarea');

const elAddBtn = document.querySelector('.add');
const elClearLast = document.querySelector('.clear-last');
const elClearFirst = document.querySelector('.clear-first');
const elUppercaseBtn = document.querySelector('.uppercase');

let tasks = [];

const taskList = document.querySelector(".task-list");

function addTask() {
  const task = {
    name: elInput.value.trim(),
    difficulty: elDificulity.value,
    category: elCategory.value.trim(),
    description: elDescription.value.trim(),
  };

  if (!task.name) {
    alert("Vazifa nomi kiritilmagan!");
    return;
  }

  tasks.push(task);

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  taskItem.innerHTML = `
    <h3 class="task-title">${task.name} <span class="difficulty ${task.difficulty.toLowerCase()}">${task.difficulty}</span></h3>
    <p class="task-desc">${task.description}</p>
    <p class="task-category"><small> ${task.category}</small></p>
    <button class="complete-btn">Complete</button>
    <button class="delete-btn">Delete</button>
  `;

  taskList.appendChild(taskItem);

  ClearInputs();

  const completeBtn = taskItem.querySelector(".complete-btn");
  completeBtn.addEventListener("click", function () {
    const taskTitle = taskItem.querySelector(".task-title");
    const taskDesc = taskItem.querySelector(".task-desc");
    const taskCategory = taskItem.querySelector(".task-category");

    taskTitle.style.textDecoration = "line-through";
    taskDesc.style.textDecoration = "line-through";
    taskCategory.style.textDecoration = "line-through";
  });

  const deleteBtn = taskItem.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    taskItem.remove(); 
  });
}

function elClearLastF() {
  const removed = tasks.pop();
  console.log("Removed last:", removed);
  if (taskList.lastChild) taskList.removeChild(taskList.lastChild);
}

function elClearFirstF() {
  const removed = tasks.shift();
  console.log("Removed first:", removed);
  if (taskList.firstChild) taskList.removeChild(taskList.firstChild);
}

function ClearInputs() {
  elInput.value = "";
  elCategory.value = "";
  elDescription.value = "";
}

elAddBtn.addEventListener("click", addTask);
elClearLast.addEventListener("click", elClearLastF);
elClearFirst.addEventListener("click", elClearFirstF);
