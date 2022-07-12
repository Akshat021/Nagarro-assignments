const addTask = () => {
    let task = document.querySelector("#task_input");
    let error = document.querySelector("#error_box");
    if(task.value === ""){
        error.innerText = "Enter value!"
        return;
    }
    error.innerText = ""
    let ul = document.querySelector("#tasks");
    let li = document.createElement("li");
    li.innerText = task.value;
    
    let update = document.createElement("button")
    update.innerHTML = "Update"
    li.appendChild(update)

    let done = document.createElement("button")
    done.innerHTML = "X"
    li.appendChild(done)
    
    let pos = ul.firstChild;
    if(pos)
        ul.insertBefore(li, pos);
    else
        ul.appendChild(li) 
    task.value = ""
}

let ul = document.querySelector("#tasks")
ul.addEventListener("click" , (e) => {
    let toRemove = e.target.parentNode;
    if(e.target.innerText === 'X'){
        ul.removeChild(toRemove)
    }
    else{
        let text = toRemove.firstChild.data;        // bcz toRemove.firstChild is of type [object text]
        document.querySelector("#task_input").value = text;
        ul.removeChild(toRemove)
    }
})