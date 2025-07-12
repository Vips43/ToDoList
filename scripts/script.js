let taskValue = document.querySelector('#input')
let ol = document.querySelector('.task')


function addTask(){
    if(taskValue.value !== ''){
        work();
        taskValue.value = ''
        saveData();
    }
    else{
        return
    }
}

function work(){
    let li = document.createElement('li')
    let span = document.createElement('span')
    
    ol.appendChild(li)
    li.appendChild(span)
    span.innerText = taskValue.value
    
    deleteBtn(li, span);
    saveData();
}
function deleteBtn(li, span) {
    let button = document.createElement('button')
    li.appendChild(button)
    button.innerText = 'X';
    saveData();
    span.addEventListener('click',()=>{
        span.classList.add('checked')
        saveData();
    })
    button.addEventListener('click', ()=>{
        button.parentElement.remove()
        saveData();
    })
}

function saveData() {
    localStorage.setItem('data', ol.innerHTML)
}
function showData() {
    ol.innerHTML = localStorage.getItem('data')
}
showData();

function clea() {
    localStorage.clear()
}