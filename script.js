let addInput = document.getElementById("add_input");
let listContainer = document.getElementById("list_container");
let containerBox = document.getElementById("container_box");

function addTask() {
  if (addInput.value === "") {
    alert("Une tâche ne peut pas être vide voyons");
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let hr = document.createElement("hr");
    p.classList.add("row");
    let textSpan = document.createElement("span");
    textSpan.innerHTML = addInput.value;
    textSpan.classList.add("textLine");
    let iconSpan = document.createElement("span");
    iconSpan.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
    iconSpan.classList.add("icon");

    p.appendChild(textSpan);
    p.appendChild(iconSpan);
    li.appendChild(p);
    li.appendChild(hr);
    listContainer.appendChild(li);
    containerBox.scrollTop = containerBox.scrollHeight;
  }
  addInput.value = "";
  saveTask();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN" || e.target.classList.contains("textLine")) {
    e.target.parentNode.classList.toggle("checked");
    saveTask();
  } else if (
    e.target.parentElement.tagName === "SPAN" ||
    e.target.parentElement.classList.contains("icon")
  ) {
    const listItem = e.target.closest("li");
    if (listItem) {
      let isConfirmed = confirm(
        "Êtes-vous sûr de vouloir supprimer cette tâche?"
      );
      if (isConfirmed) {
        listItem.remove();
      }
      saveTask();
    }
  }
});

function saveTask() {
  localStorage.setItem("tasksContainer", listContainer.innerHTML);
}

function setTask() {
  listContainer.innerHTML = localStorage.getItem("tasksContainer");
}
setTask();
