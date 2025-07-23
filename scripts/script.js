// let taskValue = document.querySelector('#input')
// let ol = document.querySelector('.task')


// function addTask(){
//     if(taskValue.value !== ''){
//         work();
//         taskValue.value = ''
//         saveData();
//     }
//     else{
//         return
//     }
// }

// function work(){
//     let li = document.createElement('li')
//     let span = document.createElement('span')

//     ol.appendChild(li)
//     li.appendChild(span)
//     span.innerText = taskValue.value

//     saveData();
//     deleteBtn(li, span);
// }
// function deleteBtn(li, span) {
//     let button = document.createElement('button')
//     li.appendChild(button)
//     button.innerText = 'X';
//     saveData();
//     span.addEventListener('click',()=>{
//         saveData();
//         span.classList.toggle('checked')
//     })
//     button.addEventListener('click', ()=>{
//         saveData();
//         button.parentElement.remove()
//     })
// }

// function saveData() {

//     localStorage.setItem('data', ol.innerHTML)

// }
// function showData() {
//     ol.innerHTML = localStorage.getItem('data')
// }
// showData();

// function clea() {
//     localStorage.clear()
// }

let input = document.querySelector('#input')
let ol = document.querySelector('.task')

let allTodos = [];

function addBtn() {
    if(input.value == ''){
        return
    }else{
        let todoText = input.value.trim()
        allTodos.push(todoText)
        createTodoItem(todoText);
        ol.innerHTML = allTodos
        input.value = '';
    }
}
function createTodoItem(todo) {
    const todoLI = document.createElement("li");
    todoLI.innerText = todo;
    ol.append(todoLI)
}