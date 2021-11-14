// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const done = document.querySelector("#done-list");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];

for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

function addDone(text) {
  let doneItem = document.createElement("li");
  doneItem.innerHTML = `
    <label for="done" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  done.appendChild(doneItem);
}

// Create
addBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();
  if (inputValue.length > 0) {
    addItem(inputValue);
    input.value = "";
  } else {
    alert("不能輸入空格");
  }
});

//Enter
input.addEventListener("keypress", function () {
  const inputValue = input.value.trim();
  if (event.key === "Enter") {
    if (inputValue.length > 0) {
      addItem(inputValue);
      input.value = "";
    } else {
      alert("不能輸入空格");
    }
  }
});

// Delete and check
list.addEventListener("click", function (event) {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    addDone(target.innerText);
    parentElement.remove();
  }
});
// done list
done.addEventListener("click", function (event) {
  const target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    addItem(target.innerText);
    parentElement.remove();
    target.classList.toggle("checked");
  }
});
