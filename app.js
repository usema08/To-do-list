//Selectors
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');
const filterOption = document.querySelector('.filter');

//Event listeners
button.addEventListener('click', addTodo)
list.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addTodo(event){
    //to prevent submitting
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = input.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check button
    const compButton = document.createElement('button');
    compButton.innerHTML = '<i class="fas fa-check"></i>';
    compButton.classList.add("complete-btn");
    todoDiv.appendChild(compButton);
    //Delete button
    const dltButton = document.createElement('button');
    dltButton.innerHTML = '<i class="fas fa-trash"></i>';
    dltButton.classList.add("dlt-btn");
    todoDiv.appendChild(dltButton);

    list.appendChild(todoDiv);

    input.value = "";
}

function deleteCheck(e){
    const item = e.target;
    
    if(item.classList[0] === 'dlt-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
function filterTodo(e) {
    const todos = list.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
            case 'remaining':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
        }
    })
}