let todoCount = 0;  

const addTodoBtn = document.getElementById("addTodoBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addTodoBtn.onclick = function() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;

    todoCount++;  

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item", "not-edited");
    todoItem.innerHTML = `
         №${todoCount}: ${todoText} 
        <button class="editBtn">change</button> 
        <button class="deleteBtn disabled" disabled>delete</button>
    `;

    todoItem.querySelector(".editBtn").onclick = function() {
        const newText = prompt("change:", todoText);
        if (newText !== null && newText.trim() !== "") {
            todoItem.firstChild.nodeValue = `${todoCount}: ${newText}`;
            todoItem.classList.remove("not-edited");
            todoItem.classList.add("edited");
            todoItem.querySelector(".deleteBtn").classList.remove("disabled");
            todoItem.querySelector(".deleteBtn").disabled = false; 
        }
    };

    todoItem.querySelector(".deleteBtn").onclick = function() {
        todoItem.remove();
    };

    todoList.appendChild(todoItem);
    todoInput.value = '';
};

todoInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") addTodoBtn.onclick();
});
