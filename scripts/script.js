let input = document.querySelector('#input')
let ol = document.querySelector('.task'),
  addEditBtn = document.querySelector('.addBtn'),
  warn = document.getElementById('warn')


let todoSpan = null;

function addBtn() {
  if (addEditBtn.innerText == 'Edit') {
    const confirmation = confirm('Sure to Edit')
    if (confirmation) {
      todoSpan.innerText = input.value
      addEditBtn.innerText = 'Add'
      input.value = ''
      showWarn("Edited successfully", "#c2a009")
      saveTasks()
    }
  } else {

    let inputValue = input.value.trim()
    if (inputValue === '') {
      showWarn("Please Write something", "red")
      return
    } else {
      addTask({text: inputValue, completed: false})
      input.value = ''
      saveTasks()
      showWarn("Task added", "green") //show warning
    }
  }
}

function addTask(taskObj) {
  let li = document.createElement('li'),
    span = document.createElement('span'),
    editbtn = document.createElement('button'),
    delbtn = document.createElement('button')

  span.innerText = taskObj.text
  if(taskObj.completed){
    span.classList.add('comp')
  }
  
  editbtn.innerText = 'Edit'
  delbtn.innerText = 'Del'
  editbtn.classList = 'editBtn'
  delbtn.classList = 'deletBtn'

  li.append(span, editbtn, delbtn);
  ol.appendChild(li)

  //delete tasks
  delbtn.addEventListener('click', () => {
    li.classList.add('vanish')
    setTimeout(()=>{
      li.remove()
    },500)
    
    showWarn("Task Deleted successfully!", "black")
    saveTasks()
  })

  // edit task
  editbtn.addEventListener('click', () => {
    input.value = span.innerText
    input.focus()
    addEditBtn.innerText = 'Edit'
    todoSpan = span
    saveTasks()
  })

}
ol.addEventListener('click',(e)=>{
  if(e.target.tagName == 'SPAN'){
    e.target.classList.toggle('comp')
    saveTasks()
  }
})
function showWarn(warning,color) {
  warn.classList.add('show')
  warn.style.color = color
  warn.innerText = warning
  setTimeout(() => {
    warn.classList.remove('show')
  }, 1500);
}

function saveTasks() {
  const tasks = []
  document.querySelectorAll('.task li').forEach(li=>{
    let span= li.querySelector("span")
    tasks.push({
      text: span.innerText,
      completed: span.classList.contains('comp')
    })
  })
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
  storedTasks.forEach(taskObj => addTask(taskObj))
}

window.addEventListener('DOMContentLoaded', loadTasks)