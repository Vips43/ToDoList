let taskValue = document.querySelector('#input')
let ol = document.querySelector('.task')


function addTask(){
    work();
}

function work(){
    let li = document.createElement('li')
    let span = document.createElement('span')
    let button = document.createElement('button')

    
    ol.appendChild(li)
    li.appendChild(span)
    li.appendChild(button)
    
    span.innerText = taskValue.value
    button.innerText = 'X';


}