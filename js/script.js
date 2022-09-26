
const inputField = document.querySelector(".input-field textarea"),
todoList = document.querySelector(".todoList"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

//we will call this function whule adding, deleting and checking unchecking the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending");

    //if tasks length is 0 then pending num text content will be no, if not then pending num value will be tasks length 
    pendingNum.textContent = tasks.length === 0? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if(allLists.length > 0){
        todoList.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return
    }
    todoList.style.marginTop= "0px"
    clearButton.style.pointerEvents = "none";
}

//console.log(inputField,todoList,pendingNum,clearButton);
//add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
    console.log(inputVal);

    if(e.key ==="Enter" && inputVal.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`;

    todoList.insertAdjacentHTML("beforeend",liTag);//inseting li tag inside the todolist div
    inputField.value ="";// removing value from input field
    allTasks();
    }
});

//checking and unchecking the checkbox while we click on the task
function handleStatus(e){
    const checkbox = e.querySelector("input");//getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks()
}
//delete task while we click on delete icon
function deleteTask(e){
    e.parentElement.remove(); //getting parent element and remove it
    allTasks();
}
//deleting all the tasks whule we click on the clear button
clearButton.addEventListener("click",() => {
    todoList.innerHTML = "";
    allTasks();
})
