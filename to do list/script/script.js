// получаем кнопку и input
let addMessage = document.querySelector(".message"),
  addButton = document.querySelector(".add"),
  // получаем список ul
  todo = document.querySelector(".todo");

// массив для хранения записей из объекта
let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessages();
}

// вешаем обработчик события на кнопку
addButton.addEventListener("click", function () {
  // создаем объект для записей
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  // добавляем записи из объекта в массив
  todoList.push(newTodo);
  displayMessages();
  //   место для хранения
  localStorage.setItem("todo", JSON.stringify(todoList));
});

function displayMessages() {
  let displayMessage = "";
  todoList.forEach(function (item, i) {
    displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
    <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;
  });
}

todo.addEventListener("change", function (event) {
  let valueLabel = todo.querySelector(
    "[for=" + event.target.getAttribute("id") + "]"
  ).innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  });
});

let button1 = document.querySelector('.btn1');
let button2 = document.querySelector('.btn2');
let body = document.querySelector('.body');

button1.addEventListener('click', function() {
  body.style.background = 'white';
})

button2.addEventListener('click', function() {
  body.style.background = 'black';
})