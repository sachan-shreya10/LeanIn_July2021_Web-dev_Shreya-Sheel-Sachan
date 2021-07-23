showList();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTask = document.getElementById("addTask");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(tasks);
  }
  taskObj.push(addTask.value);
  localStorage.setItem("tasks", JSON.stringify(taskObj));
  addTask.value = "";
  showList();
});

function showList() {
  let tasks= localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(tasks);
  }
  let html = "";
  taskObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">TASK ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteTask(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let taskElm = document.getElementById("tasks");
  if (taskObj.length != 0) {
    taskElm.innerHTML = html;
  } else {
    taskElm.innerHTML = `HURRAY!! NO PENDING WORK.`;
  }
}
function deleteTask(index) {
      let tasks = localStorage.getItem("tasks");
      if (tasks == null) {
        taskObj = [];
      } else {
        taskObj = JSON.parse(tasks);
      }
    
      taskObj.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(taskObj));
      showList();
    }
