let toDoInput
let errorInfo
let addBtn
let ulList
let newLi
let newDiv
let newBut1
let newBut2
let newBut3
let icon1
let icon2

let popup
let popupInfo
let todoToEdit
let popupInput
let popupAddBtn
let popupCloseBtn

const main = () => {
    prepareDomElements()
    prepareDomEvents()
}

const prepareDomElements = () => {
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
    popup = document.querySelector('.popup')
    popupInfo = document.querySelector('.popup-info')
    popupInput = document.querySelector('.popup-input')
    popupAddBtn = document.querySelector('.accept')
    popupCloseBtn = document.querySelector('.cancel')
    

}

const prepareDomEvents = () => {
    addBtn.addEventListener('click', addNewTask)
    ulList.addEventListener('click', checkClick)
    popupCloseBtn.addEventListener('click', closePopup)
    popupAddBtn.addEventListener('click', changeToDoText)
    toDoInput.addEventListener('keyup', checkEnterClick)
}

const addNewTask = () => {
    if(toDoInput.value !== '')
    {
        newLi = document.createElement('li')
        ulList.appendChild(newLi)
        newLi.textContent = toDoInput.value
        addNewDivTool()
        newLi.appendChild(newDiv)
        toDoInput.value = ""
        errorInfo.textContent = ""
    }
    else{
        errorInfo.textContent = "Wpisz treść zadania"
    }
}

const addNewDivTool = () => {
    newDiv = document.createElement('div')
    newBut1 = document.createElement('button')
    newBut2 = document.createElement('button')
    newBut3 = document.createElement('button')
    icon1 = document.createElement('i')
    icon2 = document.createElement('i')
    icon1.classList.add("fas")
    icon1.classList.add('fa-check')
    icon2.classList.add("fas")
    icon2.classList.add('fa-times')
    newDiv.classList.add('tools')
    newBut1.classList.add('complete')
    newBut2.classList.add('edit') 
    newBut3.classList.add('delete')
    newDiv.append(newBut1, newBut2, newBut3)
    newBut1.appendChild(icon1)
    newBut2.textContent = "EDIT"
    newBut3.appendChild(icon2)
       
}

const checkClick = e => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle("completed")
        e.target.classList.toggle('completed')
    }
    else if(e.target.matches('.edit')) {
        editTodo(e)
    }
    else if(e.target.matches('.delete')){
        deleteTodo(e)

    }
    
}

const editTodo = e => {
    todoToEdit = e.target.closest('li')
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = "flex"
    
}

const closePopup = () => {
    popup.style.display = "none"
    popupInfo.textContent = ""
    
}

const changeToDoText = () => {
    if(popupInput.value !== ''){
        todoToEdit.firstChild.textContent = popupInput.value
        closePopup()
    }
    else{
        popupInfo.textContent = "Musisz podać treść"
    }
}

const deleteTodo = e => {
    e.target.closest('li').remove()
    const allTodos = document.querySelectorAll('li')
    if(allTodos.length == 0){
        errorInfo.textContent = "Brak zadań na liście"

    }
}

const checkEnterClick = e => {
    if(e.key === 'Enter'){
        addNewTask()
    }
    
}
document.addEventListener('DOMContentLoaded', main)

