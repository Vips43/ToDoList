let taskValue = document.querySelector('#input')
let ol = document.querySelector('.task')


function addTask(){
    if(taskValue.value !== ''){
        work();
        taskValue.value = ''
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
    
    deleteBtn(li);
}
function deleteBtn(li) {
    let button = document.createElement('button')
    li.appendChild(button)
    button.innerText = 'X';
    
    li.addEventListener('click',()=>{
        li.classList.toggle('checked')
    })
    button.addEventListener('click', ()=>{
        button.parentElement.remove()
    })
}