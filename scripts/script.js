let input = document.querySelector('#input')
let ol = document.querySelector('.task'),
  addEditBtn = document.querySelector('.addBtn'),
  warn = document.getElementById('warn')

let todoSpan = null

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
      addTask(inputValue)
      input.value = ''
      showWarn("Task added", "green")
      saveTasks()
    }
  }
}

function addTask(task) {
  let li = document.createElement('li'),
    span = document.createElement('span'),
    editbtn = document.createElement('button'),
    delbtn = document.createElement('button')

  span.innerText = task
  editbtn.innerText = 'Edit'
  delbtn.innerText = 'Del'
  editbtn.classList = 'editBtn'
  delbtn.classList = 'deletBtn'

  li.append(span, editbtn, delbtn);
  ol.appendChild(li)

  //delete tasks
  delbtn.addEventListener('click', () => {
    li.remove()
    showWarn("Task Deleted", "black")
    saveTasks()
  })

  // edit task
  editbtn.addEventListener('click', () => {
    input.value = span.innerText
    input.focus()
    addEditBtn.innerText = 'Edit'
    todoSpan = span
    console.log(todoSpan)
    saveTasks()
  })

}
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
  document.querySelectorAll('.task li span').forEach(span=>{
    tasks.push(span.innerText)
  })
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []
  storedTasks.forEach(task => addTask(task))
}

window.addEventListener('DOMContentLoaded', loadTasks)
